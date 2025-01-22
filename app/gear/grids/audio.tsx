import Grid from "./grid";

const items = [
  {
    title: "Blue Yeti",
    link: "https://www.amazon.in/Blue-Yeti-USB-Microphone-Midnight/dp/B01LY6Z2M6/ref=sr_1_5?crid=1EMNK2P60OSUZ&dib=eyJ2IjoiMSJ9.364_gydXBuAgB8LELTi_pgYVf8CuUcBfrigOgeRvd_255ob6xbGr9G7kdcgWx8QvbWjForAHz7Bb7pjxx5AmvCNjC-LA1_nelPZR0MVofBKG1neQZ-_DeUCko4jKeidPRr20KoA81F7xkJgM5Lk2MeTMTnAe2BQq1Cax139BoXqQii9E1cWL4xDJjNVn5pP1-YCPgOS1PU6niDojQOK2lxBw8gxPdOWhEJMMBXdbhOadY9YXFol9-bYj5y3b1h4Bnlic5FDtouFgWA4Q83ZNzsrwVROiFpA2xkXvnnVUzRhac8_ZzDxfc9v0HXVbA0WmCDE_8f5qyoq8Hv175y2tPahlFzy042jsN5OfLa1Wh_4Fxoce4befiS1SQ4gOPi9HojbK6CdSJlohsdEsKdwkhK_cmVZCSDggvCNoVZBIsMj46ryEZanArfqL4DuCdYI_.jJRYB0DEOwE6gUz2MjbP91SFpGyX1FkexDg2yxe60LA&dib_tag=se&keywords=blue+yeti&nsdOptOutParam=true&qid=1737544793&sprefix=blue+yeti%2Caps%2C216&sr=8-5",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/61HWZsE5YNL._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "VBCable",
    link: "https://vb-audio.com/Cable/",
    header: (
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Boom stand",
    link: "https://www.amazon.in/Microphone-Extension-TONOR-Suspension-T30/dp/B089FVQD3Z/ref=sr_1_5_pp?crid=19046D5DEO39I&dib=eyJ2IjoiMSJ9.ab4kOh8lABzFsk7ck3Q57JaioNNhXsA-q5zxSOXQhZjLOIXYtZXraSYH9lNmcp5TDAzZ3vdjUrMxFAIeGY1g9BZDf0snqciz90XHZcoxLAqLzg4u7EcCv8PrmaPSyV91CcrAZzaqj8934RAuzFxt212OsJJtC5tb8QL6yuU4XSuo2JYfBuWiY9mPOoohk5zoIdZe4UrrBgZRl6x3T9epjc5AwsS2CFTUnZ-i5ZXtm03BZ_2JFGz335Xri6mhB2SHUSJYtF68n2ae9ezd7iidOsXdTTKYbHz1giyMEZQiOsNpqD4vjkn8JzSHDntxh7n-fQJ8LHpri4W85wUjWidBwHD7yaVIB7fJQ9d1S3JeMwy5OxT8Pq_wpQGm14aGVDxXWTDKRA9BLxwRlFQjAbSzrvvxPg9PFLC8edB6cI2bTaeQnO1Xw-pkqRAnYRodJLNd.cv6L2fR_vz5IDZpZTXC5IaJLmHG2ASjnvPgRsECesgc&dib_tag=se&keywords=boom+stand&qid=1737544981&sprefix=boom+stan%2Caps%2C227&sr=8-5",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/71LsLeeBhAL._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
];

const AudioGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Audio</h2>
      <Grid items={items} />
    </div>
  );
};

export default AudioGrid;
