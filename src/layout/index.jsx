import Contact from "@/components/contact-section";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className="relative">
      <NavBar />
      <div className="h-full">{children}</div>
      { path.includes("auth") ||  path.includes("contact") ? null : <Contact /> }
      { path.includes("auth") ? null : <Footer /> }
    </div>
  );
};

export default Layout;
