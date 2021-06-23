import React from 'react'
import img1 from "../images/preload-1.png";
import img2 from "../images/preload-2.png";
import img3 from "../images/preload-3.png";

const Loader = () => {
    return (
        <>
        <div id="preloader">
        <div class="caviar-load"></div>
        <div class="preload-icons">
          <img className="preload-1" src={img1} alt="img" />
          <img className="preload-2" src={img2} alt="img" />
          <img className="preload-3" src={img3} alt="imgs" />
        </div>
      </div>  
        </>
    )
}

export default Loader
