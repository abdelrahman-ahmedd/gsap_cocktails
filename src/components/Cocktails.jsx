import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Cocktails = () => {
  useGSAP(() => {



  });

  // Sample cocktail data (you can replace with your actual data)
  const cocktailData = [
    { id: 1,  image: "/images/abt1.png" },
    { id: 2,  image: "/images/abt2.png" },
    { id: 3,  image: "/images/abt3.png" },
    { id: 4,  image: "/images/abt4.png" },
    { id: 5,  image: "/images/abt5.png" },
    { id: 6,  image: "/images/abt2.png" },

	
  ];

  return (
    <section id="cocktails" className="cocktails-section h-[120vh]">
      
      <div className="container">
        <h2 className="section-title z-10">Our Cocktails</h2>
        <div className="circle-container">
          {cocktailData.map((cocktail, index) => {
            const angle = (index * 360) / cocktailData.length; // Dynamic angle calculation
            return (
              <div
                key={cocktail.id}
                className="cocktail-card"
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <div className="card-content">
                  <img src={cocktail.image} alt={cocktail.name} />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Right-side circular animation with reverse rotation */}
        <div className="circle-container-right">
          {cocktailData.map((cocktail, index) => {
            const angle = (index * 360) / cocktailData.length; // Dynamic angle calculation
            return (
              <div
                key={`right-${cocktail.id}`}
                className="cocktail-card-right"
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <div className="card-content">
                  <img src={cocktail.image} alt={cocktail.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
