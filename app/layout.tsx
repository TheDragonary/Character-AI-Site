import type { Metadata } from "next";
import { Noto_Sans, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-noto-sans',
    weight: ['400', '700'],
    display: 'swap',
});
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['400', '600', '700'],
    display: 'swap',
});
const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Ch.ai Cafe",
    description: "AI characters, brewed just for you",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${notoSans.variable} ${montserrat.variable} ${poppins.variable}`}>
            <body>{children}</body>
        </html>
    );
}