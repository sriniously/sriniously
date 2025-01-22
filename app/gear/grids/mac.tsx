import Grid from "./grid";

const items = [
  {
    title: "Bitwarden",
    link: "https://bitwarden.com/",
    header: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bitwarden_logo.svg/1200px-Bitwarden_logo.svg.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Raycast",
    link: "https://raycast.com/",
    header: (
      <img
        src="https://www.raycast.com/favicon-production.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Rectangle Pro",
    link: "https://rectangleapp.com/pro/",
    header: (
      <img
        src="https://rectangleapp.com/assets/pro/images/mac512pts1x.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Screen Brush",
    link: "https://apps.apple.com/us/app/screenbrush/id1233965871?mt=12",
    header: (
      <img
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ee/e2/5d/eee25d84-1dbb-ce32-30c1-cf640a88dcaf/ScreenBrush-0-0-85-220-0-0-5-0-2x.png/1200x630bb.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Screen Studio",
    link: "https://screen.studio/",
    header: (
      <img
        src="https://screen.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-transparent.681d19be.png&w=256&q=75"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Discord",
    link: "https://discord.com/",
    header: (
      <img
        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Slack",
    link: "https://slack.com/",
    header: (
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Chrome",
    link: "https://www.google.com/chrome/",
    header: (
      <img
        src="https://www.google.com/chrome/static/images/chrome-logo.svg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Zsh",
    link: "https://www.zsh.org/",
    header: (
      <img
        src="https://zsh.sourceforge.io/Images/color_horizontal_icon.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Zoxide",
    link: "https://github.com/ajeetdsouza/zoxide",
    header: (
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        className="w-full h-full object-contain"
      />
    ),
  },
];

const MacGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Mac</h2>
      <Grid items={items} />
    </div>
  );
};

export default MacGrid;
