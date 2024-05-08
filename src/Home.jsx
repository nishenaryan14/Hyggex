import { useState } from "react";
import logo from "./assets/Component 40.png";
import Vector from "./assets/Vector.png";
import Back from "./assets/Back.png";
import Forward from "./assets/Forward.png";
import Enlarge from "./assets/Enlarge.png";
import HomeIcon from "./assets/Home.png";
import LogoBottom from "./assets/Frame 41.png";
import Create from "./assets/Frame 48.png";
const Home = () => {
  const [activeItem, setActiveItem] = useState(null);
  const items = ["Study", "Quiz", "Test", "Game", "Others"];

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-12 pb-10 w-full">
      <div className="w-full  pt-3.5 flex justify-between items-center flex-wrap gap-y-3">
        <img src={logo} className="w-191px h-39px" alt="logo" />
        {/* <div className="flex flex-grow justify-end "> */}
        <div className="flex  items-center justify-evenly w-2/5 flex-wrap gap-y-2 ">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
          <button className="btn px-7 py-1.5 rounded-2xl text-white">
            login
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className="w-full">
        <div className=" flex items-center mt-7 flex-wrap gap-y-2">
          <img className="h-4" src={HomeIcon} alt="Home" />
          <span className="mx-2">&gt;</span>
          <p className="text-gray-400">Flashcard</p>
          <span className="mx-2">&gt;</span>
          <p className="text-gray-400">Mathematics</p>
          <span className="mx-2">&gt;</span>
          <p className="text-blue-950	font-medium">Relation and Function</p>
        </div>
        <p className="font-bold text-transparent bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-3xl my-4">
          Relations and Functions ( Mathematics )
        </p>
        <div className="w-full h-4/5  flex justify-center items-start">
          <div className="w-3/5 h-4/5 min-w-80 flex-col items-center justify-between">
            <div className="w-full h-12 flex justify-evenly items-center ">
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`cursor-pointer ${
                    index === activeItem ? "active" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </div>
            <div className="w-full h-96 rounded-2xl innerBox flex justify-center items-center ">
              <p className="text-white text-4xl tracking-widest	">9+6+7x-2x-3</p>
            </div>
            <div className="w-full h-1/5 flex justify-evenly items-center mt-3">
              <img src={Vector} alt="" />
              <div className="flex justify-evenly items-center gap-x-3">
                <img className="w-14 h-14" src={Back} alt="" />
                <p className="text-3xl">01/10</p>
                <img className="w-14 h-14" src={Forward} alt="" />
              </div>
              <img src={Enlarge} alt="" />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between my-9 items-center flex-wrap">
          <img className="h-24 w-48" src={LogoBottom} alt="" />
          <img className="h-14 max-w-3/12" src={Create} alt="" />
        </div>
        <>
          <p className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text mt-28 mb-4">
            FAQ
          </p>
          <div className="h-60 w-3/4 flex-col">
            <div className="px-2 justify-between h-14 flex items-center rounded-lg border mb-8">
              <p>Can education flashcards be used for all age groups?</p>{" "}
              <span className="rotate-90 text-xl font-light">&gt;</span>
            </div>
            <div className="px-2 justify-between h-14 flex items-center rounded-lg border mb-8">
              <p>How do education flashcards work?</p>{" "}
              <span className="rotate-90 text-xl font-light">&gt;</span>
            </div>
            <div className="px-2 justify-between h-14 flex items-center rounded-lg border">
              <p>Can education flashcards be used for test preparation?</p>{" "}
              <span className="rotate-90 text-xl font-light">&gt;</span>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
