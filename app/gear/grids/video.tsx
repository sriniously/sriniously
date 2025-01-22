import Grid from "./grid";

const items = [
  {
    title: "OBS",
    link: "https://obsproject.com/",
    header: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/OBS_Studio_logo.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "DroidCam",
    link: "https://droidcam.app/",
    header: (
      <img
        src="https://play-lh.googleusercontent.com/9S6YlKwQ3qm4nQghyzcOZRJGsdyKQ9JhkYhL2YiKG-H5WSupv6cc51qNC_KttZnLz7E"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "DaVinci Resolve",
    link: "https://www.blackmagicdesign.com/products/davinciresolve/",
    header: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Premiere Pro",
    link: "https://www.adobe.com/products/premiere.html",
    header: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png"
        className="w-full h-full object-contain"
      />
    ),
  },
];

const VideoGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Video</h2>
      <Grid items={items} />
    </div>
  );
};

export default VideoGrid;
