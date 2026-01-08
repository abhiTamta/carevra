"use client";

import React from 'react'
import Header from "@/components/layout/Header/Header";
import TopHeader from "@/components/layout/topHeader/TopHeader";
import HomePageBanner from "@/components/layout/banner/HomePageBanner";
import { usePathname } from 'next/navigation';

const Layout = () => {
  const pathname = usePathname();

  const isDashboard = pathname === '/dashboard';
  const isAuthPage = pathname === '/registration';
  return (
    <div>
      {isDashboard || isAuthPage ? null : <TopHeader />}
      {isDashboard || isAuthPage ? <Header /> : <Header />}
      {isDashboard || isAuthPage ? null : <HomePageBanner />}
    </div>
  )
}

export default Layout