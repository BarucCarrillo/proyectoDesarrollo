import React from 'react';
import { getServerSession } from 'next-auth'; // Adjust the import path as necessary

export default async function Ladies() {
    const session = await getServerSession();
    console.log(session);
    return (
        <div>
            <h1>Sección de damas</h1>
            <p>Contenido de la sección de damas</p>
        </div>
    );
}
