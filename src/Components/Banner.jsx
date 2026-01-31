import React from 'react';
import img1 from '../../src/assets/smart-startup-support-m.webp';
import img2 from '../../src/assets/images.jfif';
import img3 from '../../src/assets/6505382-Miguel-Ruiz-Quote-What-causes-you-to-be-trapped-is-what-we-call.jpg';

const Banner = () => {
  return (
    <div className="w-full relative">
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-[500px] object-cover" alt="Startups Support" />
          <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}
          <div className="absolute bottom-20 left-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold">Startups Support</h1>
            <p className="mt-2 text-lg md:text-2xl max-w-md">
              Help innovative startups grow and reach their goals with transparent funding.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-[500px] object-cover" alt="Creative Projects" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-20 left-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold">Creative Projects</h1>
            <p className="mt-2 text-lg md:text-2xl max-w-md">
              Bring your creative ideas to life by connecting with passionate backers.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-[500px] object-cover" alt="Personal Causes" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-20 left-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold">Personal Causes</h1>
            <p className="mt-2 text-lg md:text-2xl max-w-md">
              Raise funds for personal needs and make a difference in your life and others’.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
