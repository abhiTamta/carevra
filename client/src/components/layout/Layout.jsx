"use client";

import React from 'react'
import Header from "@/components/layout/Header/Header";
import TopHeader from "@/components/layout/topHeader/TopHeader";
import HomePageBanner from "@/components/layout/banner/HomePageBanner";
import { usePathname } from 'next/navigation';

const Layout = () => {
  const pathname = usePathname();

  const isDashboard = pathname === '/dashboard';
  const isAuthRegister = pathname === '/registration';
  const isAuthLogin = pathname === '/login';
  return (
    <div>
      {isDashboard || isAuthRegister || isAuthLogin ? null : <TopHeader />}
      {isDashboard || isAuthRegister || isAuthLogin ? <Header /> : <Header />}
      {isDashboard || isAuthRegister || isAuthLogin ? null : <HomePageBanner />}
    </div>
  )
}

export default Layout