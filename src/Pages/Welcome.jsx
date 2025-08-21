import React from "react";
import { useEffect } from "react";

import Footer from "../componets/Footer/Footer";

import WelcomePageImage1 from "../images/WelcomePageImage1.png";
import WelcomePageImage2 from "../images/WelcomePageImage2.png";
import WelcomePageImage3 from "../images/WelcomePageImage3.png";
import WelcomePageImage4 from "../images/WelcomePageImage4.png";

import { Link } from "react-router-dom";

function Welcome() {
  useEffect(() => {
    //alert("This is NOT REAL NETFLIX so don't Enter your REAL CREDENTIALS")
    const image1 = WelcomePageImage1;
  }, []);

  return (
    <div>
      {/*Hero Section*/}
  <div className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-[#15202B] relative">
        <div className="grid content-center justify-center h-full justify-items-center">
          <div className="w-10/12 text-center sm:w-11/12 md:w-40rem">
            <>
              <h1 className="mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl">
                Your unified hub for every story you love.
              </h1>
              <h2 className="mb-4 text-xl text-center text-stone-400 font-light sm:text-2xl">
                Loom is a single, unified hub for enthusiasts to discover, track, and deeply explore all their favorite media.
              </h2>
              <h3 className="mb-2 text-center text-stone-400 font-light sm:text-xl sm:mb-8">
                Moving beyond standard aggregators, Loom integrates movies, TV shows, anime, video games, and books into a seamless experience.
              </h3>
              <div>
                <input
                  placeholder="Email Address"
                  className="w-full p-2 py-3 rounded-sm sm:py-4 md:py-5 md:w-3/4"
                />
                <Link to={'/signup'}>
                  <button className="px-4 py-2 mt-3 font-medium text-white bg-primary rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4">
                    Get Started
                  </button>
                </Link>
              </div>
            </>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
        ></div>
      </div>

      {/* Section 2 */}
      <section className="bg-black border-y-8 border-y-zinc-800">
        
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-2 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Discover across media.
                </h1>
                <h2 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Explore connected worlds: films, series, anime, games, and books—together in one place.
                </h2>
              </div>
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage1} />
              </div>
            </div>
          </div>
      </section>

      {/* Section 3 */}
      <section className="bg-black">
        
          <div className="flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage2} />
              </div>
              <div>
                <h1 className="mx-4 mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Track and curate your universe.
                </h1>
                <h2 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Build lists, mark progress, and keep your entire media life organized—across formats.
                </h2>
              </div>
            </div>
          </div>
      </section>

      {/* Section 4 */}
      <section className="bg-black border-y-8 border-y-zinc-800">
        
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Insights tailored to your taste.
                </h1>
                <h2 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Coming soon: taste profiles, associations, and on‑demand recommendations—like a Spotify Wrapped for your media.
                </h2>
              </div>
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage3} />
              </div>
            </div>
          </div>
      </section>

      {/* Section 5 */}
  <section className="bg-black">
          <div className="flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage4} />
              </div>
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  One account. Endless exploration.
                </h1>
                <h2 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Your Library spans every medium you love—seamlessly.
                </h2>
              </div>
            </div>
          </div>
      </section>

      {/* Section 6 */}
      <section></section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Welcome;
