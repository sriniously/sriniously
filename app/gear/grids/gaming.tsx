import Grid from "./grid";

const items = [
  {
    title: "PS5",
    link: "https://www.amazon.in/Sony-CFI-2008A01X-PlayStation%C2%AE5-Console-slim/dp/B0CY5HVDS2/ref=sr_1_3?dib=eyJ2IjoiMSJ9.pFhgCqcURNHp7Ghh6tpkbnpMS-EPEWOhlo_-YgjavWygB1LDQv6EOzw2xmRdlu_CTYidmbZUYJxO-Yx5dScwwxzfIdt_eV-9ROuV8_BAg8uyBGlPzC0N8YT7jgBlBPDW_63PAsi4pFtou5vv3wl_m1BRYzY8fs0LExwPud1x8LGLulNBvUEON9FPi7i8YQAhtuK0JK0wrlD3U3K4pzER7K87o93E7oeTgLWRXj-_g74.TVg2-z0xHhlzd816XJcbEPJEE51OUINeZ1nXTlw-Tak&dib_tag=se&keywords=ps5&qid=1737549792&sr=8-3",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/51ljnEaW0pL._SL1000_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  }
];

const GamingGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Gaming</h2>
      <Grid items={items} />
    </div>
  );
};

export default GamingGrid;
