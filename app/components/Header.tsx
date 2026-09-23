
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./navbar";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="absolute top-0 left-0 z-[100] flex items-center justify-between w-full p-[2rem] bg-transparent">
                {/* Logo */}
                <Image
                    src="/assets/logo.png"
                    width={300}
                    height={300}
                    alt="logo image"
                    className="w-[8rem] relative z-[110]"
                />

                {/* Desktop Navbar */}
                <div className="hidden min-[501px]:block">
                    <Navbar />
                </div>

                {/* Desktop Let's Talk */}
                <Link
                    className="hidden min-[501px]:block text-[0.8rem] px-[3rem] py-[1rem] rounded-full text-black bg-white"
                    href="/contact"
                >
                    Let's talk
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hidden max-[500px]:block relative z-[110]"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <Image
                        src={
                            isMenuOpen
                                ? "/assets/close.png"
                                : "/assets/menu.png"
                        }
                        alt={isMenuOpen ? "Close menu" : "Open menu"}
                        width={32}
                        height={32}
                    />
                </button>
            </header>

            {/* Mobile Full Screen Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[90] max-[500px]:flex hidden items-center justify-center bg-black">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[2rem] font-medium"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[2rem] font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[2rem] font-medium"
                        >
                            Services
                        </Link>

                        <Link
                            href="/work"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[2rem] font-medium"
                        >
                            Work
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[1rem] px-[2.5rem] py-[1rem] rounded-full text-black bg-white mt-4"
                        >
                            Let's talk
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
