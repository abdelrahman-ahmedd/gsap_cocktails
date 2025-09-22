import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "120% top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero">
        <div className="z-10">
          <h1 className=" title">LUMEERA</h1>

          {/* <img
            src="/images/hero-left-leaf.png"
            alt="left-leaf"
            className="left-leaf"
          /> */}
          <img
            src="/images/hero-right-leaf.png"
            alt="right-leaf"
            className="right-leaf"
          />

          <div className="body max-w-7xl">
            {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

            <div className="content">
              <div className="space-y-5 hidden md:block">
                <p className="text-lg font-lobster m-0 font-bold bg-gradient-to-b from-white via-white to-oklch(87% 0 0) bg-clip-text text-transparent">
                  Quality . Fun . Luxury
                </p>
                <p className="text-3xl font-lobster m-0 font-bold bg-gradient-to-br from-orange-300  to-orange-400 bg-clip-text text-transparent">
                  Experience the Perfect
                </p>
                <p className="text-3xl font-lobster font-bold bg-gradient-to-br from-orange-300  to-orange-400 bg-clip-text text-transparent">
                  Blend in Alexandria
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {/* <button className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                Explore Restaurant
              </button> */}
                  <button className="px-6 py-3 rounded-lg border border-white/70 text-white font-semibold hover:bg-white/20">
                    Check Events
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-4 view-cocktails mt-6 md:mt-0 max-w-xs">
                <p className="text-xl font-lobster font-semibold bg-gradient-to-br from-orange-300  to-orange-400 bg-clip-text text-transparent">
                  – Welcome to Lumeera
                </p>
                <span className="text-md text-white/90 leading-relaxed">
                  Discover Alexandria’s premier destination for leisure and
                  entertainment. From a fine-dining restaurant and cozy café to
                  a vibrant kids area and weekly family events, Lumeera is where
                  unforgettable memories are made.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
