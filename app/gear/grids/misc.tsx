import Grid from "./grid";

const items = [
  {
    title: "Wacom tablet",
    link: "https://www.amazon.in/Wacom-CTL-472-6-inch-3-5-inch-Graphic/dp/B078HRR1XV/ref=sr_1_3?crid=3NTU6MEJNUZ3R&dib=eyJ2IjoiMSJ9.fgu6eOm14M-pFcb0sh3LRZRoLR-mL0zqvNKSiMSw_BBhiVnupDtnHhCFKs98dEugB_L2nKpH0Ee8oRAFecUYSbiV-uH4MjAc7CcKjKnElLuOH8E4FOdzCdMgtDwtmeL0cnswvXeKCvi_xklGjNjPVk4HZirS8YiHgNehxqYCAEeDc0R6KBxdYTk0ZGeFVHhXaX3L3EU10aoZxKT3EjX5xrkHBAVvtkKDa0MMpBWaHP4.v8APXXLfd9XpIv1VDbTplne5RI6viVJf5bQebjgAsjg&dib_tag=se&keywords=wacom&nsdOptOutParam=true&qid=1737545077&sprefix=wacom%2Caps%2C224&sr=8-3",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/61CYV-pyToL._SL1500_.jpg500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Logitech C270",
    link: "https://www.amazon.in/Logitech-Widescreen-Correction-Noise-Reducing-FaceTime/dp/B008QS9J6Y/ref=sr_1_2?crid=22EIXUBVGBU8V&dib=eyJ2IjoiMSJ9.OBBWppirX52sRs2Qom8EUUO0scXDuE4-y1N4XJu7qaLTqmSwHhGvQmgGWkkgIA5rVd0NvP62CLWhSsLLA4DYNFaojQahiff5FxQqOYp5QJPWWrzxx5jbI8yaZYiS_WcH4ygw_bUzI7zRNMKaiYlbkwEgjgjbDKWztHbh80wxKDA23epMSjJKVqHlwa2eRBZ7kQb452jDZo_kOueKCycmnOvm6rzBOYTBRLybQZ9BmKzh4oVtdhCEgS8Vx82uWY1UgCs5TtdR-3AyMgtTCr_1LKPuVUCdal07dYDGIkc0Lgz9mt_cLfsXCJBdJPh3_nSCUdaHYs7VTkdXsNCBu7bLJIhzc6dE0c0zgKfUZbuGLFo.yGFfmDbE_wrXDd1lpZD6PnrrpL_KVsu_sZGAdcP32Hs&dib_tag=se&keywords=Logitech%2BC270&nsdOptOutParam=true&qid=1737548907&s=computers&sprefix=logitech%2Bc270%2Ccomputers%2C213&sr=1-2&th=1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/51BmSwjFu5L._SL1281_.jpg"
        className="w-full h-full object-contain"
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
