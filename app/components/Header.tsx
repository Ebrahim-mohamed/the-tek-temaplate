"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./navbar";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="absolute z-50 flex items-center justify-between w-full p-[2rem] bg-transparent">
            <Image src="/assets/logo.png" width={300} height={300} alt="logo image" className="w-[8rem]" />

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
                className="hidden max-[500px]:block z-[60]"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                <Image
                    src={isMenuOpen ? "/assets/close.png" : "/assets/menu.png"}
                    alt={isMenuOpen ? "Close menu" : "Open menu"}
                    width={32}
                    height={32}
                />
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full px-[2rem] pt-4 pb-6 max-[500px]:block hidden">
                    <div className="flex flex-col items-center gap-5 py-6 rounded-[2rem] bg-[#FFFFFF33] border border-[#FFFFFF24] backdrop-blur-md">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[1rem] font-medium"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[1rem] font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[1rem] font-medium"
                        >
                            Services
                        </Link>

                        <Link
                            href="/work"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-[1rem] font-medium"
                        >
                            Work
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[0.8rem] px-[2rem] py-[0.8rem] rounded-full text-black bg-white"
                        >
                            Let's talk
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}