import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import Link from "next/link";
import { ReactNode } from 'react';
import SideMenuHandler from "./SideMenuHandler";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Places and Faces",
    description: "A work in progress",
};


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="border-b">
                    <div className="flex h-16 items-center px-8 container mx-auto">
                        <p>Places and Faces</p>
                    </div>
                </div>
                <div className="flex">
                    <SideMenuHandler/>
                    <div className="w-full px-5 pt-12">{children}</div>
                </div>
            </body>
        </html>
    );
}
