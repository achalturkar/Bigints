import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function TopUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#1F3EFF] text-white rounded-full shadow-xl 
                     hover:bg-[#0A0F2F] transition-all duration-300  z-50"
        >
          <FiArrowUp size={22} />
        </button>
      )}
    </>
  );
}
