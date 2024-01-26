import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <ScrollRestoration />
            <div className="App flex flex-col min-h-screen relative">
                <Header title='React Movies'/>
                <main className="flex-grow py-8 container mx-auto">
                    <Outlet />
                </main>
                <Footer/>
            </div>
        </>
    );
}