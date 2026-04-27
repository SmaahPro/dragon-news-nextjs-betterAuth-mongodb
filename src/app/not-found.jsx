'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                    25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
                    50% { transform: translateY(-40px) translateX(-10px); opacity: 0.4; }
                    75% { transform: translateY(-20px) translateX(5px); opacity: 0.5; }
                }
                .animate-float {
                    animation: float 5s linear infinite;
                }
            `}} />

            <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-6 text-center overflow-hidden">

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse transition-all duration-1000"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
                            style={{
                                left: `${(i * 7.7) % 100}%`,
                                top: `${(i * 13.3) % 100}%`,
                                animationDuration: `${3 + (i % 4)}s`,
                                animationDelay: `${i % 5}s`,
                            }}
                        />
                    ))}
                </div>

                <div
                    className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 transition-all duration-300 pointer-events-none hidden md:block"
                    style={{
                        transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
                        left: 0,
                        top: 0,
                    }}
                />

                <div className="relative z-10 space-y-6">
                    <h1 className="text-[12rem] md:text-[16rem] font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse tracking-tighter leading-none">
                        404
                    </h1>

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-300 text-lg max-w-md mx-auto">
                            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                        >
                            🏠 Go Back Home
                        </Link>

                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                        >
                            🔄 Try Again
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;