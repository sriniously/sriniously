import Grid from "./grid";

const items = [
  {
    title: "Mac Mini M2 Pro",
    link: "https://www.amazon.in/Apple-Desktop-Computer-10%E2%80%91core-Ethernet/dp/B0BSHSD25X/ref=sr_1_1?crid=24OPQZR38DU7O&dib=eyJ2IjoiMSJ9.V5ki55lib5JJO2OWVoCMbxzJVKPTVoWefY9oHN2voPa1HTmUuiGFOiBVxbuFI5AbzBEN5oGEp1xhO2AEIHhQ7iEsoefQVcPKY4ResXBSPcNY7hUTXqzaWfmHbe0F5hBq7PVNCA1NamY1zFV_m-YV866_Ah3CBN4KMO-rA1gSq8och05CiG2r6XvP-Y2sZOX4Gn9CyO-K5BGz8DhVDgywR3Az-8F5CHTaMSx3MYKl_so-y6m639t_QI5OCMT9Y1uAPFxiZVNLRe8Q-Kuctoeq2se0Vxm4w5QgXsmRw92ZM4FLVqPXxXVLgPhcq3z4idLFpYto19k6az33VpjRxahiUgxVsRTYqMIukhhg52DYN2o.n_OYQNjgaRVWS1p0NBSN8p-MfhNYcdNe3IznfSwVDh4&dib_tag=se&keywords=mac+mini+m2+pro&qid=1737545736&s=computers&sprefix=mac+mini+m2+pro%2Ccomputers%2C214&sr=1-1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/61jup8h--XL._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "LG UltraGear 32 inch",
    link: "https://www.amazon.in/LG-Ultragear-32Gn650-Compatible-Freesync/dp/B09YDJ75SH/ref=sr_1_7?crid=6VWGCQWQJBVF&dib=eyJ2IjoiMSJ9.YP_NP8VAXqU4x-6kIdtEH6Txr8Q_DaaEonAGn86EvNoStQv6Lvp1OcYuWU1Wh5z2MEbTV0ldjPmzwqm3n9oOFRq674d2qzl_WWgQIywD8KSbDpiuytSpSYDHr_9PNKgtDLoxOqx5nRZ6AcRohuod8y8VtIMjDtBh1LXM2Wox_FrkpbgDx-GiysutMcFUkB74ZNJe6As_3jqRSotXiOnzyTnmH09ZaoZdOuZPUG3kSCLhoCUVErsUp5zUuGaA3dAD12Rcso2RnajXcNe-rFifWxEgripArfT5yNMvJuN0OmzUJg-4ati-zgdjtl0vQIFKMCTjVysDFVNVcUCTW0fDwvLLrb8S0qW_vgYC83hzxKg.pKnPhYfvWwApJc_Xtk_CuiVIY1q6BqYC0lPXz_Q7B8I&dib_tag=se&keywords=lg%2Bultragear%2B32&nsdOptOutParam=true&qid=1737545336&s=computers&sprefix=lg%2Bultragear%2B3%2Ccomputers%2C213&sr=1-7&th=1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/71EstOZXAlL._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Acer Nitro 27 inch",
    link: "https://www.flipkart.com/acer-nitro-68-58-cm-27-inch-full-hd-led-backlit-va-panel-monitor-qg271/p/itmb1d6d304d390d?pid=MONFZA9N2KUAH5XK&lid=LSTMONFZA9N2KUAH5XKWWEJOF&marketplace=FLIPKART",
    header: (
      <img
        src="https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/h/g/m/-original-imagqbqruzhemgze.jpeg?q=70&crop=false"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Acer 27 inch",
    link: "https://www.flipkart.com/acer-68-58-cm-27-inch-full-hd-led-backlit-ips-panel-ecodisplay-mercury-free-flicker-bluelight-shield-amd-free-sync-compatible-2x2w-inbuilt-speakers-tilt-able-stand-ultra-thin-monitor-ha270/p/itm3db4d5d4a60e7?pid=MONFDFDJ6DG7X6YC&lid=LSTMONFDFDJ6DG7X6YCYZEWNU&marketplace=FLIPKART",
    header: (
      <img
        src="https://rukminim2.flixcart.com/image/416/416/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70&crop=false"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Keychron K2 Pro",
    link: "https://keychron.in/product/keychron-k2-pro-qmk-via-wireless-mechanical-keyboard/",
    header: (
      <img
        src="https://keychron.in/wp-content/uploads/2023/02/Keychron-K2-Pro-QMK-VIA-Wireless-Mechanical-Keyboard-for-Mac-Windows-PBT-keycaps-PCB-screw-in-stabilizer-hot-swappable-brown-switch_451c4c14-fbf8-4dc1-bc4b-0a3ba01e4586_540x-520x520.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "UPS 1100VA/660W",
    link: "https://www.amazon.in/APC-BX1100C-1100VA-230V-Back/dp/B01ELNPG2I/ref=sr_1_4?crid=1K3HOHL7BSTN8&dib=eyJ2IjoiMSJ9.AhMoK2ifAFBEiUYyV18gJHUUyeQIQobVqKdVBn8Dd1fG210_p3OIZ6FeBcbHxw_4nxSPP6EJo50990z5cPQAk3vvOe_W8PP5Ej1oru1ghr2fH5HjuQL576x1X9MTAo0XrHYb1grHmNqvPJ6L49JgV3QeYkueKiII1Qffx9ZkOLDkczNZX13MgwcgFw0bUPi1zr_213oZAeCMcvzhbvFyf-J6SrCM31WYJwqCMqMXjdY2fhvkd-Jzw8xkLe_dUulJ51mq-85zNm4-vydcoeBPRiq0S29Z2fpi1iJK_B1IbulCmVw9OG89kanLv-WXkQke8gDkUejQBglYatv1MJlgMVsFagD9NC3ILZf3kKJI1as.l3jmzdOlIGapAW6l-rZTOqH6Z76xyXc8CwfnJo8xTdo&dib_tag=se&keywords=ups&qid=1737549007&s=computers&sprefix=ups%2Ccomputers%2C220&sr=1-4",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/51PIIdmOSLL._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "UPS 600VA/360W",
    link: "https://www.amazon.in/APC-BX600C-600VA-230V-Back/dp/B016XVRKZM/ref=sr_1_3?crid=1K3HOHL7BSTN8&dib=eyJ2IjoiMSJ9.AhMoK2ifAFBEiUYyV18gJHUUyeQIQobVqKdVBn8Dd1fG210_p3OIZ6FeBcbHxw_4nxSPP6EJo50990z5cPQAk3vvOe_W8PP5Ej1oru1ghr2fH5HjuQL576x1X9MTAo0XrHYb1grHmNqvPJ6L49JgV3QeYkueKiII1Qffx9ZkOLDkczNZX13MgwcgFw0bUPi1zr_213oZAeCMcvzhbvFyf-J6SrCM31WYJwqCMqMXjdY2fhvkd-Jzw8xkLe_dUulJ51mq-85zNm4-vydcoeBPRiq0S29Z2fpi1iJK_B1IbulCmVw9OG89kanLv-WXkQke8gDkUejQBglYatv1MJlgMVsFagD9NC3ILZf3kKJI1as.l3jmzdOlIGapAW6l-rZTOqH6Z76xyXc8CwfnJo8xTdo&dib_tag=se&keywords=ups&qid=1737549007&s=computers&sprefix=ups%2Ccomputers%2C220&sr=1-3",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/51+xYuXifNL._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Logitech B170",
    link: "https://www.amazon.in/Logitech-B170-Wireless-Mouse-Black/dp/B01J0XWYKQ/ref=sr_1_3?crid=3B6CGTR6H09C2&dib=eyJ2IjoiMSJ9.mFhYhXYHNqB8lOrPQC8zaOi0vLdYtw04ePm149nCMnDHq9_azYbQVezfefFjjqH58nN_y0cEGGX7LlfuKC8INl2p5Z4P1oTwlc-h1DG7pvEe94h8waDVk_Ytu04iI6WQq7n9qvYI-wGftx6_4wRzFSWFCNHzMsUVFu1C_WNglQpHoGpcGNQKqmHJWgymEL1zNC1AoHrrxNf4_HYcik0NPPX_-6QUSMiUonzz_tmc9tjAtEb87Ko-EiBXCS9u8ZKiZGHtiryr2xd0IA2Q-OAG9sJz3nFIAiPsYb1tE7UInN4LCTFRDM_QKAmQ7NX5W6ghgka-_B_E2NpHHX3Dl6h2TEjk7QUCWoNrtOMYBFkXS14.5KbhsM_8wV4PippJNd_liWFX_7Kg6vfghjn7RKVFtVI&dib_tag=se&keywords=Logitech%2BB170&nsdOptOutParam=true&qid=1737549457&s=computers&sprefix=logitech%2Bb170%2Ccomputers%2C213&sr=1-3&th=1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/51uCYJqDrML._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "External Hard Disk 2TB",
    link: "https://www.amazon.in/gp/product/B07VTGBWYH?th=1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/71JM4o97HjS._SL1500_.jpg"
        className="w-full h-full object-contain"
      />
    ),
  },
];

const EnginesGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Engines</h2>
      <Grid items={items} />
    </div>
  );
};

export default EnginesGrid;
