import React from 'react';
import Head from 'next/head';
import A from './A';

const MainContainer = ({children, keywords}) => {
    return (
        <>

            <Head>
                <meta keywords="kolaider, nextjs + keywords"></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Главная"></A>
                <A href={'/users'} text="Пользователи"></A>

                {/* <Link href="/" legacyBehavior>
                    <a className="link">Главная</a>
                </Link>  
                <Link href="/users" legacyBehavior>
                    <a className="link">Пользователи</a>
                </Link>             */}
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                    {`
                        .navbar {
                            background: orange;
                            padding: 15px;

                        }

                    `}
            </style>
        </>
    );
};

export default MainContainer;