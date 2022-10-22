import Head from 'next/head';
import { Footer, Navbar } from './';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='min-h-full'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
