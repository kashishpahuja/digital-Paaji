import React, { useEffect, useState } from "react";

function Why() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Background Section */}
      <div
        style={{
          backgroundImage: "url(/Images/services/bg.webp)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative overflow-hidden w-full h-auto pt-24"
      >
        <div className="mx-8 xl:mx-60 relative">
          {/* Title */}
          <div className="text-center relative">
            <h3 className="bungeeHead my-8 text-[#e6e8eb] text-3xl md:text-5xl lg:text-7xl relative">
              Why Choose Digital Paaji?
            </h3>
            {/* GIF placed on the title */}
            <div
  className="absolute w-20 lg:w-24 h-20 lg:h-24  md:-left-40 "
  style={{
    top: `-10%`, // Center vertically on text
    transform: `translate(-60%, -60%) translateX(${scrollY * 0.2}px)`, // Parallax effect for left-right movement
    transition: "transform 0.2s ease-out",
  }}
>
  <img src="/Images/services/run.gif" alt="Animated GIF" />
</div>

           
          </div>
        </div>
        <div className="dense-zigzag -mb-[4px] "></div>
      </div>

      {/* Content Section */}
      <div className="bg-[#cc5f4d] py-12 px-4 lg:px-0">
        <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
          <h3 className="merriHead text-white text-sm my-4">
            For a variety of reasons, businesses select Digital Paaji over other
            digital marketing services because of its dedication to openness,
            personalization, and ongoing growth.
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="text-center mx-4 md:mx-12 lg:mx-32 xl:mx-72">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <div className="my-2">
                  <div className="my-4">
                    <h3 className="bungeeHead text-lg text-white">
                      Tailored Strategies:
                    </h3>
                    <h3 className="bungeeHead text-lg text-white">
                      Marketing Plans Designed for You
                    </h3>
                  </div>
                  <p className="merriHead text-sm text-white text-justify">
                    One effective tactic for retaining clients and nurturing
                    leads is email marketing. With an emphasis on enticing
                    clients with insightful content, we offer customised
                    campaigns, drip campaigns, and promotional newsletters.
                    To convert prospective clients into devoted followers, we
                    increase open and click-through rates, cultivate solid
                    connections, and employ A/B testing and segmentation
                    techniques.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="px-6 py-2 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
