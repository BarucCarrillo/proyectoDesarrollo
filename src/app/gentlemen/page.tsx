
import React from 'react';
import { getServerSession } from 'next-auth';

export default async function Gentlemen() {
    const session = await getServerSession();
    console.log(session);
    return (
        <div>
            <h1>Sección de caballeros</h1>
            <p>Contenido de la sección de caballeros</p>
        </div>
    );
}