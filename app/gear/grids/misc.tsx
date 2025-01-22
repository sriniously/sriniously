import Grid from "./grid";

const items = [
  {
    title: "Wacom tablet",
    link: "https://www.amazon.in/Wacom-CTL-472-6-inch-3-5-inch-Graphic/dp/B078HRR1XV/ref=sr_1_3?crid=3NTU6MEJNUZ3R&dib=eyJ2IjoiMSJ9.fgu6eOm14M-pFcb0sh3LRZRoLR-mL0zqvNKSiMSw_BBhiVnupDtnHhCFKs98dEugB_L2nKpH0Ee8oRAFecUYSbiV-uH4MjAc7CcKjKnElLuOH8E4FOdzCdMgtDwtmeL0cnswvXeKCvi_xklGjNjPVk4HZirS8YiHgNehxqYCAEeDc0R6KBxdYTk0ZGeFVHhXaX3L3EU10aoZxKT3EjX5xrkHBAVvtkKDa0MMpBWaHP4.v8APXXLfd9XpIv1VDbTplne5RI6viVJf5bQebjgAsjg&dib_tag=se&keywords=wacom&nsdOptOutParam=true&qid=1737545077&sprefix=wacom%2Caps%2C224&sr=8-3",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/61CYV-pyToL._SL1500_.jpg500_.jpg"
        className="w-full h-full object-cover"
      />
    ),
  },
];

const MiscGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Misc</h2>
      <Grid items={items} />
    </div>
  );
};

export default MiscGrid;
