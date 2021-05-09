import { updateObject } from "../../shared/utility";

import JelleKuiperImg from "../../assets/home/project-previews/JelleKuiper-selector.jpg";
import StefanoKeizersImg from "../../assets/home/project-previews/StefanoKeizers-selector.jpg";
import KinderImg from "../../assets/home/project-previews/Kinder-selector.jpg";

import DragonsQuillLogo from "../../assets/home/dnd-projects-logos/DragonsQuillLogo.svg";
import HitpointCalculatorLogo from "../../assets/home/dnd-projects-logos/HitpointCalculatorLogo.svg";

const initialState = {
  featuredProjects: [
    {
      id: "fp-sk",
      name: "Stefano Keizers",
      tagline: "Comedian, TV host, writer and all-round artist",
      image: StefanoKeizersImg,
      imageAlt: "Stefano Keizers without shirt staring forward menacingly",
      position: "center",
      development: false,
      active: false
    },
    {
      id: "fp-ki",
      name: "Kinder",
      tagline: "Improving the charitable sector and creating a Kinder world",
      image: KinderImg,
      imageAlt:
        "Koen Hoogendoorn wearing a Kinder shirt at a reception desk helping people",
      position: "right",
      development: false,
      active: true
    },
    {
      id: "fp-jk",
      name: "Jelle Kuiper",
      tagline: "A theater producer and marriage officiant",
      image: JelleKuiperImg,
      imageAlt: "Jelle Kuiper officiating a wedding ceremony",
      position: "left",
      development: false,
      active: false
    }
  ],
  dndProjects: [
    {
      id: "dnd-dq",
      name: "Dragon's Quill",
      logo: DragonsQuillLogo,
      alt: "Dragon's Quill logo",
      tagline: "Helps people write structured RPG adventures",
      position: "center",
      development: true,
      hidden: false
    },
    {
      id: "dnd-hc",
      name: "Hitpoint Calculator",
      logo: HitpointCalculatorLogo,
      alt: "Hitpoint Calculator logo",
      tagline:
        "Helps people who suck at math to track hitpoints in D&D battles",
      position: "right",
      development: false,
      hidden: false
    }
  ],
  additionalProjects: [
    {
      id: "ap-fo",
      name: "Financial Offices",
      tagline: "A center for financial offices in Amsterdam",
      development: false
    },
    {
      id: "ap-st",
      name: "Streepgedicht",
      tagline: "A tool to create blackout poems by censoring the news",
      development: false
    },
    {
      id: "ap-th",
      name: "Titia Hoogendoorn",
      tagline: "An artistic content creator",
      development: true
    },
    {
      id: "ap-mk",
      name: "Martin Koolhoven",
      tagline: "A director that loves westerns",
      development: false
    }
  ],
  pages: [
    {
      id: "p-about",
      name: "About me",
      tagline: "UX/UI designer, React developer, imaginary wizard"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_FEATURED_PROJECT":
      let featuredProjects = [...state.featuredProjects];
      let clickedProject = { ...featuredProjects[action.index] };

      featuredProjects.forEach((project) => {
        project.active = false;
      });

      clickedProject.active = true;
      featuredProjects[action.index] = clickedProject;

      const updatedState = { featuredProjects: featuredProjects };

      return updateObject(state, updatedState);
    default:
      return state;
  }
};
export default reducer;
