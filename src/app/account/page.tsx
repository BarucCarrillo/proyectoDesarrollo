"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import Header from '../../components/header';
import Footer from '../../components/footer';

function UserDashboard() {

    const { data: session, status } = useSession();
    console.log(session, status);
    return (
        <div>
            <Header/>
            <h1>Tu Cuenta</h1>
            <pre>
                {JSON.stringify(
                    {
                        session,
                        status,
                    },
                    null,
                    2
                )}
            </pre>
            <Footer/>
        </div>
    );
};

export default UserDashboard;