import { useState, useEffect } from "react";
import SocialBar from "./SocialBar";
import Navbar from "../Navbar";


export default function Layout({ children }) {
  const [showSocial, setShowSocial] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowSocial(false);   // scrolling down → hide social bar
    } else {
      setShowSocial(true);    // scrolling up → show social bar
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <SocialBar show={showSocial} />
      <Navbar offset={showSocial} />
      <main className="pt-[30px]">{children}</main>
    </>
  );
}
