import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps){
  return(
    <>
      <Navbar />
      {
        children
      }
      <Footer />
    </>
  )
}
