export const VideoBg = () => {
  return (
    <div>
      <div className=" w-full h-[550px] overflow-hidden mt-4">
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
  );
};
