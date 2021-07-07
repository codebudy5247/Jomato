import React from 'react'
import img1 from "../images/preload-1.png";
import img2 from "../images/preload-2.png";
import img3 from "../images/preload-3.png";

const Loader = () => {
    return (
        <>
        <main>
	<div class="preloader">
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
	</div>
	<div class="status">Loading<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
</main>
        </>
    )
}

export default Loader
