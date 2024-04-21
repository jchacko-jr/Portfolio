import {
    
    SiAdobeaftereffects,
    SiAdobephotoshop,
    SiCinema4D,
    SiFigma,
    SiAdobepremierepro,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Yip 5.0 Promo",
        description:
            "YIP 5.0 Promo,crafted with the help of software After Effects 2022.The promo captures the essence of YIP, highlighting its key features and the incredible opportunities. ",
        technologies: [SiAdobeaftereffects, SiAdobephotoshop,SiCinema4D,SiFigma,SiAdobepremierepro],
        techNames: ["After Effects", "Photoshop", "Cinema4D", "Figma","Premire Pro"],
        techLinks: ["https://www.adobe.com/products/aftereffects.html", "https://www.adobe.com/products/photoshop.html", "https://www.maxon.net/en/cinema-4d", "https://www.figma.com/" ,"https://www.adobe.com/ro/products/premiere.html"],
        github: "https://drive.google.com/file/d/1LfRsjF_zO9-WlJz40lj9AKAFxojff9JC/view?usp=drive_link",
        demo: "https://drive.google.com/file/d/1LfRsjF_zO9-WlJz40lj9AKAFxojff9JC/view?usp=drive_link",
        image: "/projects/port.png",
        available: true,
    },
    {
        id: 1,
        name: "Beyoud Us Promo",
        description:
            "Official promo of Beyoud Us Hackathon Hosted by GTECH μLearn & Kerala Knowledge Economy Mission (KKEM) ",
        technologies:[SiCinema4D,SiFigma,SiAdobepremierepro],
        techNames: ["Cinema4D", "Figma","Premire Pro"],
        techLinks: ["https://www.maxon.net/en/cinema-4d", "https://www.figma.com/" ,"https://www.adobe.com/ro/products/premiere.html"],
        github: "https://www.instagram.com/reel/CuE0CO0Arp1/",
        demo: "https://www.instagram.com/reel/CuE0CO0Arp1/",
        image: "/projects/2.png",
        available: true,
    },
    {
        id: 2,
        name: "GTA HACKATHON PROMO",
        description:
            "promotion video done for GTA HACKATHON powered By GTECH MULEARN AND KMEA ",
        technologies: [SiAdobeaftereffects],
        techNames: ["AfterEffects"],
        techLinks: ["https://www.adobe.com/products/aftereffects.html"],
        github: "https://drive.google.com/file/d/19ZKxDChvJH46QW48wQOJ8wAiMl8Lcpla/view?usp=sharing",
        demo: "https://drive.google.com/file/d/19ZKxDChvJH46QW48wQOJ8wAiMl8Lcpla/view?usp=sharing",
        image: "/projects/pro3.png",
        available: true,
    },
    {
        id: 3,
        name: "Coming Soon",
        description:
            " I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiCinema4D,SiFigma,SiAdobepremierepro],
        techNames: ["Cinema4D", "Figma","Premire Pro"],
        techLinks: ["https://www.maxon.net/en/cinema-4d", "https://www.figma.com/" ,"https://www.adobe.com/ro/products/premiere.html"],
        github: "https://github.com/jchacko-jr/Yip-5.0-Video",
        demo: "https://www.unrealengine.com/",
        image: "/projects/construction.webp",
        available: false,
    },
];
