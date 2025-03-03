import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/utils/mongoose-db';
import Task from '@/models/Task';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Correo Electrónico", type: "email", placeholder: "Email" },
                password: { label: "Contraseña", type: "password", placeholder: "********" },
            },
            async authorize(credentials) {
                await connectDB();
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email y contraseña son requeridos');
                }

                const userFound = await Task.findOne({ email: credentials.email });
                if (!userFound) {
                    throw new Error('Credenciales inválidas');
                }

                const passwordMatch = await bcrypt.compare(credentials.password, userFound.password);
                if (!passwordMatch) {
                    throw new Error('Credenciales inválidas');
                }

                return {
                    id: userFound._id.toString(),
                    email: userFound.email,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user}) {
            if (user) {
                token.user = {
                    id: user.id,
                    email: user.email,
                };
            }
            return token;
        },
        async session({ session, token }) {
            if (token.user) {
                session.user = token.user;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };
