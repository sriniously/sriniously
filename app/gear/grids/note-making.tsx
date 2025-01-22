import Grid from "./grid";

const items = [
  {
    title: "Obsidian",
    link: "https://obsidian.md/",
    header: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Sublime",
    link: "https://www.sublimetext.com/",
    header: (
      <img
        src="https://www.sublimehq.com/images/sublime_text.png"
        className="w-full h-full object-contain"
      />
    ),
  },
];

const NoteMakingGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Note Making</h2>
      <Grid items={items} />
    </div>
  );
};

export default NoteMakingGrid;
