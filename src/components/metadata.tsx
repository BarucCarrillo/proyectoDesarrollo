import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata: React.FC = () => {
    return (
        <Helmet>
            <title>AROMAS</title>
            <meta name="description" content="Bienvenido al sitio web de AROMAS." />
            <link rel="icon" href="/icon.png" />
            <meta name="keywords" content="sitio web, perfumes, moda" />
            <meta name="EQUIPO DESARROLLO" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
};

export default Metadata;