import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Usraya Printing Press",
  description: "Your best choice for any kind of printing, situated in Suleja, Niger state. Our services includes T-shirt Printing, Mug printing, Banner, Logo design, Flyers, Jotters, and lots more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='sticky top-0 z-50'>
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
