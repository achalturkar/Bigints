import { Link } from "react-router-dom";

const HeroAll = ({ title, subtitle }) => {
  return (
    <section className="relative w-full h-[240px] md:h-[260px] bg-[url('/hero.jpg')] bg-cover bg-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 pt-16 text-sm font-medium">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
        <span className="mx-2 text-white">/</span>
        <span className="text-blue-300">{title}</span>
      </div>

      {/* Title & Subtitle */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-8 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-white/90 text-base md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroAll;


// const HeroAll = ({ title, subtitle, bgImage }) => {
//   return (
//     <section
//       className="relative w-full h-[360px] bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     ></section>