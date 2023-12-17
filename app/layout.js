import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialProfiles from "./components/SocialProfiles";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const font = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Christian Herrera",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="relative z-40" >
          <Header />
        </div>
        <div className="fixed top-0 z-50 left-0 ml-5 flex flex-col justify-center items-center gap-2 max-sm:hidden">
          <div className=' h-40 w-[1px] rounded-sm bg-white'>
          </div>
          <SocialProfiles />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
