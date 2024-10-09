 
import { Link } from 'react-router-dom';
 
import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
const BigButton = () => {
 
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(true);
  const playSound = () => {
    const audio = new Audio('/audio/button04.mp3'); // Replace with your sound file path
    audio.volume = 0.3; 
    audio.play();
  };

  const handleClick = () => {
    // Move down by 20px
    console.log("test")
    animate(".dial", { y: 10 }, { type: 'tween', stiffness: 300 })
      .then(() => {
        // Bring it back to the original position
        animate(".dial", { y: 0 }, { type: 'tween', stiffness: 300 });
      });

      animate(".dialShadow", { opacity: 0.3 }, { type: 'tween', stiffness: 300 })
      .then(() => {
        // Bring it back to the original position
        animate(".dialShadow", { opacity: 0.2 }, { type: 'tween', stiffness: 300 });
      });
      setIsVisible(!isVisible);

      playSound()
     

  };

 


 
  return (
    <main className="main"  ref={scope}>
      <div className="white">
      <motion.div 
 // Handle click event
       initial={{ opacity: 1 }} // Initial position
       animate={{ opacity: isVisible ? 1 : 0 }}
       transition={{ duration: 0.8 }} // Animate to the new Y position
       className='orange' > 
        
        </motion.div>
   
        </div>
      <div className='dialGroup' >
   
        <motion.div
         
          onClick={handleClick} // Handle click event

          className="dial">
          <div className="highlight">

          </div>

        </motion.div>
        <div className="base">
        </div>

        <div className="hole">
        </div>

        <div className="dialShadow">
        </div>

      </div>
    </main>

  );
};

export default BigButton