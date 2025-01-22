import Grid from "./grid";

const items = [
  {
    title: "Mac Mini M2 Pro",
    link: "https://www.amazon.in/Apple-Desktop-Computer-10%E2%80%91core-Ethernet/dp/B0BSHSD25X/ref=sr_1_1?crid=24OPQZR38DU7O&dib=eyJ2IjoiMSJ9.V5ki55lib5JJO2OWVoCMbxzJVKPTVoWefY9oHN2voPa1HTmUuiGFOiBVxbuFI5AbzBEN5oGEp1xhO2AEIHhQ7iEsoefQVcPKY4ResXBSPcNY7hUTXqzaWfmHbe0F5hBq7PVNCA1NamY1zFV_m-YV866_Ah3CBN4KMO-rA1gSq8och05CiG2r6XvP-Y2sZOX4Gn9CyO-K5BGz8DhVDgywR3Az-8F5CHTaMSx3MYKl_so-y6m639t_QI5OCMT9Y1uAPFxiZVNLRe8Q-Kuctoeq2se0Vxm4w5QgXsmRw92ZM4FLVqPXxXVLgPhcq3z4idLFpYto19k6az33VpjRxahiUgxVsRTYqMIukhhg52DYN2o.n_OYQNjgaRVWS1p0NBSN8p-MfhNYcdNe3IznfSwVDh4&dib_tag=se&keywords=mac+mini+m2+pro&qid=1737545736&s=computers&sprefix=mac+mini+m2+pro%2Ccomputers%2C214&sr=1-1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/61jup8h--XL._SL1500_.jpg"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "LG UltraGear 32 inch",
    link: "https://www.amazon.in/LG-Ultragear-32Gn650-Compatible-Freesync/dp/B09YDJ75SH/ref=sr_1_7?crid=6VWGCQWQJBVF&dib=eyJ2IjoiMSJ9.YP_NP8VAXqU4x-6kIdtEH6Txr8Q_DaaEonAGn86EvNoStQv6Lvp1OcYuWU1Wh5z2MEbTV0ldjPmzwqm3n9oOFRq674d2qzl_WWgQIywD8KSbDpiuytSpSYDHr_9PNKgtDLoxOqx5nRZ6AcRohuod8y8VtIMjDtBh1LXM2Wox_FrkpbgDx-GiysutMcFUkB74ZNJe6As_3jqRSotXiOnzyTnmH09ZaoZdOuZPUG3kSCLhoCUVErsUp5zUuGaA3dAD12Rcso2RnajXcNe-rFifWxEgripArfT5yNMvJuN0OmzUJg-4ati-zgdjtl0vQIFKMCTjVysDFVNVcUCTW0fDwvLLrb8S0qW_vgYC83hzxKg.pKnPhYfvWwApJc_Xtk_CuiVIY1q6BqYC0lPXz_Q7B8I&dib_tag=se&keywords=lg%2Bultragear%2B32&nsdOptOutParam=true&qid=1737545336&s=computers&sprefix=lg%2Bultragear%2B3%2Ccomputers%2C213&sr=1-7&th=1",
    header: (
      <img
        src="https://m.media-amazon.com/images/I/71EstOZXAlL._SL1500_.jpg"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Acer Nitro 27 inch",
    link: "https://www.flipkart.com/acer-nitro-68-58-cm-27-inch-full-hd-led-backlit-va-panel-monitor-qg271/p/itmb1d6d304d390d?pid=MONFZA9N2KUAH5XK&lid=LSTMONFZA9N2KUAH5XKWWEJOF&marketplace=FLIPKART",
    header: (
      <img
        src="https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/h/g/m/-original-imagqbqruzhemgze.jpeg?q=70&crop=false"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Acer 27 inch",
    link: "https://www.flipkart.com/acer-68-58-cm-27-inch-full-hd-led-backlit-ips-panel-ecodisplay-mercury-free-flicker-bluelight-shield-amd-free-sync-compatible-2x2w-inbuilt-speakers-tilt-able-stand-ultra-thin-monitor-ha270/p/itm3db4d5d4a60e7?pid=MONFDFDJ6DG7X6YC&lid=LSTMONFDFDJ6DG7X6YCYZEWNU&marketplace=FLIPKART",
    header: (
      <img
        src="https://rukminim2.flixcart.com/image/416/416/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70&crop=false"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: "Keychron K2 Pro",
    link: "https://keychron.in/product/keychron-k2-pro-qmk-via-wireless-mechanical-keyboard/",
    header: (
      <img
        src="https://keychron.in/wp-content/uploads/2023/02/Keychron-K2-Pro-QMK-VIA-Wireless-Mechanical-Keyboard-for-Mac-Windows-PBT-keycaps-PCB-screw-in-stabilizer-hot-swappable-brown-switch_451c4c14-fbf8-4dc1-bc4b-0a3ba01e4586_540x-520x520.jpg"
        className="w-full h-full object-cover"
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
