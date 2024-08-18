import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/static/images/logo.png";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Crest Farm",
    description: "crest farm web3",
};

export default function RootLayout({ children }) {

    const user = 'Admin';
    return (
        <html lang="en">

            <body>
                <header className="px-[50px] bg-black">
                    <div className="content-area mx-auto flex h-16 flex-row justify-between">
                        <div className={"flex h-16 items-center"}>
                            <Link href="/#">
                                <Image src={logo} width={152} height={30} alt="" />
                            </Link>
                        </div>
                        <div className="flex h-16">
                            <div className="h-16 leading-[64px] cursor-pointer"><span><Link href="/strategy" className="text-[#ffffff]">Strategy</Link></span></div>
                            <div className="h-16 leading-[64px] cursor-pointer ml-[88px]"><span><Link href="/tradingPost" className="text-[#ffffff]">Protfolio</Link></span></div>
                            <div className="h-16 leading-[64px] cursor-pointer ml-[88px]">
                                <span className="px-[24px] py-[9px] bg-white hover:bg-[#f3f3f3] text-black cursor-pointer rounded-[14px]">Sign In</span>
                                {/* <span className="px-[24px] py-[9px] bg-white hover:bg-[#f3f3f3] text-[#2C4E93] cursor-pointer rounded-[14px]">{user}</span> */}
                            </div>
                        </div>
                    </div>
                </header>
                {children}
                <Footer />
            </body>
        </html>
    );
}
