import Image from "next/image";

export const VideoBg = () => {
  return (
    <div>
      <div>
        <div className="absolute w-full h-[560px] overflow-hidden mt-4 ">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
          >
            <source src="/videos/beach.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div>
        <div className="relative z-5000 top-[12rem] sm:px-2 lg:px-0">
          <div className="container mx-auto ">
            <div className="flex justify-between drop-shadow-[0_15px_15px_rgba(0,0,0,0.40)]">
              <div className="lg:w-[50%] sm:w-[80%] text-white">
                <h2 className=" font-bold lg:text-5xl lg:pb-3 sm:pb-2 sm:text-2xl">
                  The World&#39;s Best Travel Spots
                </h2>
                <p className="lg:text-lg sm:text-sm tracking-wide ">
                  Lorem ipsum dolor sit amet consectetur. Platea urna hendrerit
                  dui eget velit sollicitudin orci. Non sit lorem dolor placerat
                  faucibus. Ut tellus fewow fadeInUp sugiat facilisi neque
                  sagittis cursus sagittis.
                </p>
              </div>
            </div>
            {/* customer review */}
            <div className="flex items-center ">
              <div className="mt-6 flex -space-x-3  ">
                <div className="lg:w-[44px] lg:h-[44px] sm:w-[30px] sm:h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                  <Image
                    src={"/images/profile/PrImage1.jpg"}
                    fill
                    className="object-cover rounded-full"
                    alt="customer images"
                  />
                </div>
                <div className="lg:w-[44px] lg:h-[44px] sm:w-[30px] sm:h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                  <Image
                    src={"/images/profile/PrImage2.jpg"}
                    fill
                    className="object-cover rounded-full"
                    alt="customer images"
                  />
                </div>
                <div className="lg:w-[44px] lg:h-[44px] sm:w-[30px] sm:h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                  <Image
                    src={"/images/profile/PrImage3.jpg"}
                    fill
                    className="object-cover rounded-full"
                    alt="customer images"
                  />
                </div>
                <div className="lg:w-[44px] lg:h-[44px] sm:w-[30px] sm:h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                  <Image
                    src={"/images/profile/PrImage4.jpg"}
                    fill
                    className="object-cover rounded-full"
                    alt="customer images"
                  />
                </div>
                <div className="lg:w-[44px] lg:h-[44px] sm:w-[30px] sm:h-[30px] bg-red-400 rounded-full flex items-center justify-center text-white lg:text-xl font-bold transform transition-transform duration-300 hover:scale-150">
                  <h2>5k+</h2>
                </div>
              </div>
              <h3 className="font-semibold text-white lg:text-xl sm:text-base lg:ml-5 sm:ml-3 pt-5 sm:pt-6 capitalize">
                happy customer
              </h3>
              <p className="text-2xl ml-2 pt-5 ">👋</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
