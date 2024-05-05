import Head from "next/head";
import Script from "next/script";
import * as React from "react";
import VectorBackground from "../../Atoms/Photos/VectorBackground";
import Footer from "../../Molecules/Footer";
import Header from "../../Molecules/Header";
import { ThemeProvider } from "../Theme/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Portofolio Agustini</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Agustinidelyanti/agustini/main/assets/Logo%20stti.png"
        />
        <meta name="description" content="Created by Rachmat Ghaly." />
      </Head>
      <Script
        src="https://kit.fontawesome.com/0ae515efac.js"
        crossOrigin="anonymous"
      />

      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <main>
          <Header />
          {/* Background oval vector */}
          <VectorBackground />
          <div className="max-w-[68rem] mx-auto">
            <div>{children}</div>
            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
