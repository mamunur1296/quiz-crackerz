import React, { useContext } from "react";
import { TutorialData } from "../../utilities/root/Root";
import Catagory from "./Catagory";
import image from "../../utilities/home.png";

const Home = () => {
  const data = useContext(TutorialData);

  return (
    <div>
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50"></div>
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <span className="relative">Woilcome and </span>
                  </span>{" "}
                  Don’t just take our word for it ...
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Engage your team,
                  <br className="hidden md:block" />{" "}
                  <span className="relative px-1">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                    <span className="relative inline-block text-deep-purple-accent-400">
                      wherever they work
                    </span>
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  From our #1 team trivia night, to our group classes and
                  icebreakers, our portfolio of facilitated live events will
                  give your team an experience they won’t forget.
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      VIRTUAL & HYBRID EVENTS
                    </h6>
                    <p className="text-sm text-gray-900">
                      If your team is 100% virtual or hybrid, it’s never been
                      easier to gather and bring the best professional
                      entertainers right to their devices, virtually.
                    </p>
                  </div>
                </div>
                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      IN-PERSON EVENTS
                    </h6>
                    <p className="text-sm text-gray-900">
                      If your team is all co-located, or you are gathering
                      in-person, bring one of our professionals onsite to show
                      everyone a great time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 lg:p-8  mb-20 dark:text-gray-100">
        <div className="container w-11/12 mx-auto space-y-12 ">
          {data.map((tutorial) => (
            <Catagory key={tutorial.id} tutorial={tutorial}></Catagory>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
