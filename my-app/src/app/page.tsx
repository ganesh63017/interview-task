"use client";

import MeetChef from "@/components/meetChef/meetChef";
import "./globals.css";
import Sidebar from "@/components/sideBar/sidebar";
import Products from "@/components/products/products";
import OnlineProducts from "@/components/onlineProducts/onlineProducts";
import Banners from "@/components/banners/banners";
import SignUpBanner from "@/components/signupBanner/signUpBanner";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <>
      {" "}
      <Sidebar />
      <div className="min-w-full bg-primary-main">
        <MeetChef />
        <Products />
        <OnlineProducts />
        <Banners />
        <SignUpBanner />
        <Footer />
      </div>
    </>
  );
}
