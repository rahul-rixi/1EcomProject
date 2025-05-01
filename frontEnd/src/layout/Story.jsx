import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

import p_img2_1 from '../assets/frontend_assets/p_img2_1.png';
import p_img2_2 from '../assets/frontend_assets/p_img2_2.png';
import p_img2_3 from '../assets/frontend_assets/p_img2_3.png';
import p_img2_4 from '../assets/frontend_assets/p_img2_4.png';
import p_img3 from '../assets/frontend_assets/p_img3.png';
import p_img4 from '../assets/frontend_assets/p_img4.png';

const storiesData = [
  { id: 1, title: 'Opera Bow Backless Dress', thumbnail: p_img2_1, storySrc: p_img2_1 },
  { id: 2, title: 'Rory Tie Up Dress', thumbnail: p_img2_2, storySrc: p_img2_2 },
  { id: 3, title: 'Brietta Bow Slit Dress', thumbnail: p_img2_3, storySrc: p_img2_3 },
  { id: 4, title: 'Blush Rose Dress', thumbnail: p_img2_4, storySrc: p_img2_4 },
  { id: 5, title: 'Rosy Bustier Dress', thumbnail: p_img3, storySrc: p_img3 },
  { id: 6, title: 'Elegant Chic Dress', thumbnail: p_img4, storySrc: p_img4 },
];

const StoryComponent = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openStory = (index) => {
    setActiveIndex(index);
    setIsStoryOpen(true);
  };

  const closeStory = () => {
    setIsStoryOpen(false);
  };

  return (
    <div className="w-full py-4 flex flex-col items-center relative">
      {/* Thumbnails Carousel */}
      <div className="w-full overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-4 md:justify-center">
          {storiesData.map((story, index) => (
            <div
              key={story.id}
              onClick={() => openStory(index)}
              className="flex flex-col items-center cursor-pointer shrink-0 min-w-[70px]"
            >
              <div className="border-2 border-gradient-to-r from-purple-500 to-pink-500 rounded-full p-[2px] aspect-square w-16 h-16">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
              <p className="text-center text-[10px] mt-1 w-16 truncate">{story.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Modal */}
      {isStoryOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
        >
          <div className="relative w-[95%] max-w-[700px] sm:max-w-[90%] md:max-w-[700px] lg:max-w-[800px]">
            <button
              onClick={closeStory}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10 bg-black p-2 rounded-full"
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              centeredSlides={true}
              navigation={true}
              initialSlide={activeIndex}
              spaceBetween={10}
              className="rounded-2xl"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1.25,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.25,
                  spaceBetween: 30,
                },
              }}
            >
              {storiesData.map((story, index) => (
                <SwiperSlide
                  key={story.id}
                  className={`transition-all duration-700 ease-in-out relative ${
                    index === activeIndex
                      ? 'transform scale-100 rotate-0 z-30 shadow-2xl'
                      : 'transform scale-90 rotate-15 z-20 opacity-60'
                  }`}
                >
                  <div className="bg-white rounded-xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
                    <img src={story.storySrc} alt="Story" className="w-full h-[60%] object-cover" />
                    <div className="text-center text-xs text-gray-500 p-2">
                      Your favourite dress is back in stock! ✨🎀
                    </div>
                    <div className="p-3 bg-white shadow-inner mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-semibold">{story.title}</h3>
                          <p className="text-xs text-gray-600">
                            ₹1,450 <span className="line-through text-gray-400 ml-2">₹3,099</span>
                          </p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 text-xs rounded-lg">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StoryComponent;
