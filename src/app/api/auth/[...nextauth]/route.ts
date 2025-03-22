import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/utils/mongoose-db';
import Task from '@/models/Task';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                identifier: { label: "Correo Electrónico o ID", type: "text", },
                password: { label: "Contraseña", type: "password", },
            },

            async authorize(credentials) {
                await connectDB();
                if (!credentials?.identifier || !credentials?.password) {
                    throw new Error('identifier y contraseña son requeridos');
                }

                const { identifier, password } = credentials;
                let user = null;
                let role = null;
        
                // Identificar si es un usuario o un admin
                if (identifier.includes("@")) {
                  user = await Task.findOne({ email: identifier });
                  role = "usuario";
                } else {
                  user = await Admin.findOne({ adminId: identifier });
                  role = "admin";
                }
        
                if (!user) throw new Error("Usuario o administrador no encontrado");
        
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) throw new Error("Credenciales Incorrectas");
        
                return { id: user._id, role };

            },
        }),
    ],
    callbacks: {
        async jwt({ account, token, user, profile, session}) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any;
            return session;
        },
    },
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };
