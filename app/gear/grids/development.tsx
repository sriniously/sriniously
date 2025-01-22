import Grid from "./grid";

const items = [
  {
    title: "Ghostty",
    link: "https://ghostty.org/",
    header: (
      <img
        src="https://avatars.githubusercontent.com/u/169223740?s=200&v=4"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "VSCode",
    link: "https://code.visualstudio.com/",
    header: (
      <img
        src="https://code.visualstudio.com/assets/images/code-stable.png"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Cursor",
    link: "https://www.cursor.com/",
    header: (
      <img
        src="https://avatars.githubusercontent.com/u/126759922?v=4"
        className="w-full h-full object-cover"
      />
    ),
  },
  //   burp suite
  {
    title: "Burp Suite",
    link: "https://portswigger.net/burp",
    header: (
      <img
        src="https://w7.pngwing.com/pngs/286/446/png-transparent-burp-suite-macos-bigsur-icon-thumbnail.png"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Insomnia",
    link: "https://insomnia.rest/",
    header: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQKJrkgkZqkkVUXnYdqATpo6PjVWKG8N1GA&s"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Orbstack",
    link: "https://www.orbstack.dev/",
    header: (
      <img
        src="https://orbstack.dev/img/icon256.png"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "TablePlus",
    link: "https://tableplus.com/",
    header: (
      <img src="https://tableplus.com/resources/favicons/apple-icon.png" />
    ),
  },
];

const DevelopmentGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Development</h2>
      <Grid items={items} />
    </div>
  );
};

export default DevelopmentGrid;
