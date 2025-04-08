import Airplane1 from "../Images/Airplane1.jpg";
import Airline2 from "../Images/Airplane2.jpg";
import Airplane3 from "../Images/Airplane3.jpg";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

function Showcasetwo() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-[var(--background-color)] transition-colors duration-300">
      <div className="flex flex-wrap gap-10 justify-center px-5 lg:px-20 bg-[var(--background-color)] mt-10">
        <div className="bg-[var(--card-background-color)] text-[var(--text-color)] rounded-b-md w-full lg:w-[290px] h-[430px] shadow-2xl mb-5">
          <img
            className="w-full lg:w-[290px] h-[250px]"
            src={Airplane1}
            alt="image1"
            
          />
          <div className="pl-2 pb-3" >
            <div className="flex gap-1 lg:gap-5 text-[#ffb703] pt-3 justify-center lg:justify-start">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h1 className="text-2xl font-semibold text-center lg:text-left sm:pt-2 sm:pb-2">
            Experience Excellence with <span>Som-Airline</span>
            </h1>
            <p className="text-center lg:text-left">
            At Som-Airline, we are dedicated to...
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[var(--button-background-color)] py-1 font-serif mt-2 px-5 text-[var(--text-color)] border-2 border-[var(--border-color)] rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-background-color)] text-[var(--text-color)] rounded-b-md w-full lg:w-[290px] h-[430px] shadow-2xl mb-5">
          <img
            className="w-full lg:w-[290px] h-[250px]"
            
            src={Airline2}
            alt="pilot"
          />
          <div className="pl-2 pb-3" >
            <div className="flex gap-1 lg:gap-5 text-[#ffb703] pt-3 justify-center lg:justify-start">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h1 className="text-2xl font-semibold text-center lg:text-left sm:pt-2 sm:pb-2">
            Discover Luxury with <span>Som-Airline</span>
            </h1>
            <p className="text-center lg:text-left">
              Experience the perfect blend of com... 
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[var(--button-background-color)] py-1 font-serif mt-2 px-5 text-[var(--text-color)] border-2 border-[var(--border-color)] rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-background-color)] text-[var(--text-color)] rounded-b-md w-full lg:w-[290px] h-[430px] shadow-2xl mb-5">
          <img
            className="w-full lg:w-[290px] h-[250px]"
          
            src={Airplane3}
            alt="global connectivity"
          />
          <div className="pl-2 pb-3">
            <div className="flex gap-1 lg:gap-5 text-[#ffb703] pt-3 justify-center lg:justify-start">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h1 className="text-2xl font-semibold text-center lg:text-left sm:pt-2 sm:pb-2">
            Connecting the World with <span>Som-Airline</span>
            </h1>
            <p className="text-center lg:text-left">
            With Som-Airline, explore global desti...
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[var(--button-background-color)] py-1 font-serif mt-2 px-5 text-[var(--text-color)] border-2 border-[var(--border-color)] rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcasetwo;
