import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import TopHeader from "@/components/layout/topHeader/TopHeader";
import HomePageBanner from "@/components/layout/banner/HomePageBanner";
import Footer from "@/components/layout/footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Carevra | Animal Care, Anytime, Anywhere",
  description: "Book vet visits, grooming, boarding, training, or emergency rescue in seconds. Track your caregiver, pay securely, and rate your experience. Carevra brings professional care to pets and animals near you, powered by an intelligent Uber-style matching system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable}  antialiased`}
      >
        <TopHeader />
        <Header />
        <HomePageBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
