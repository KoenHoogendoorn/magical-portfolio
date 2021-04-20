import { updateObject } from "../../shared/utility";

import JelleKuiperImg from "../../assets/home/project-previews/JelleKuiper-selector.jpg";
import StefanoKeizersImg from "../../assets/home/project-previews/StefanoKeizers-selector.jpg";
import KinderImg from "../../assets/home/project-previews/Kinder-selector.jpg";

import DragonsQuillLogo from "../../assets/home/dnd-projects-logos/DragonsQuillLogo.png";
import HitpointCalculatorLogo from "../../assets/home/dnd-projects-logos/HitpointCalculatorLogo.png";

const initialState = {
  featuredProjects: [
    {
      id: "fp0",
      name: "Jelle Kuiper",
      tagline: "A theater producer and marriage officiant",
      image: JelleKuiperImg,
      imageAlt: "Jelle Kuiper officiating a wedding ceremony",
      position: "left",
      active: false
    },
    {
      id: "fp1",
      name: "Stefano Keizers",
      tagline: "Comedian, TV host, writer and all-round artist",
      image: StefanoKeizersImg,
      imageAlt: "Stefano Keizers without shirt staring forward menacingly",
      position: "center",
      active: true
    },
    {
      id: "fp2",
      name: "Kinder",
      tagline: "Improving the charitable sector and creating a Kinder world",
      image: KinderImg,
      imageAlt:
        "Koen Hoogendoorn wearing a Kinder shirt at a reception desk helping people",
      position: "right",
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

    case "CLONE_DND_PROJECTS":
      //create 2 copies before and after the actual content
      let dndProjects = [...state.dndProjects];

      let clonedProjectsBefore = [];
      let clonedProjectsAfter = [];

      //give them id's and add them to array
      dndProjects.forEach((project) => {
        const newIdBefore = project.id + "A";
        const beforeClone = { ...project };
        beforeClone.id = newIdBefore;
        beforeClone.position = "left";
        clonedProjectsBefore.push(beforeClone);

        const newIdAfter = project.id + "B";
        const afterClone = { ...project };
        afterClone.id = newIdAfter;
        afterClone.position = "right";
        clonedProjectsAfter.push(afterClone);
      });

      dndProjects = clonedProjectsBefore.concat(
        dndProjects,
        clonedProjectsAfter
      );

      //make first and last one hidden
      dndProjects[0].hidden = true;
      dndProjects[dndProjects.length - 1].hidden = true;

      const updatedState2 = { dndProjects: dndProjects };
      return updateObject(state, updatedState2);

    case "CLICKED_LEFT_DND":
      let dndProjects2 = [...state.dndProjects];
      switch (action.activeProjectIndex) {
        case 2:
          dndProjects2[dndProjects2.length - 1].hidden = true;
          dndProjects2[dndProjects2.length - 1].position = "left";
          // --
          dndProjects2[action.activeProjectIndex - 2].hidden = false;
          break;
        case 1:
          dndProjects2[dndProjects2.length - 2].hidden = true;
          dndProjects2[dndProjects2.length - 2].position = "left";
          // --
          dndProjects2[dndProjects2.length - 1].hidden = false;
          break;
        case 0:
          dndProjects2[dndProjects2.length - 3].hidden = true;
          dndProjects2[dndProjects2.length - 3].position = "left";
          // --
          dndProjects2[dndProjects2.length - 2].hidden = false;
          break;

        default:
          dndProjects2[action.activeProjectIndex - 3].hidden = true;
          dndProjects2[action.activeProjectIndex - 3].position = "left";
          // --
          dndProjects2[action.activeProjectIndex - 2].hidden = false;
          break;
      }

      // sliding cards
      dndProjects2[action.activeProjectIndex].position = "right";
      dndProjects2[action.newActiveProjectIndex].position = "center";
      const updatedState3 = { dndProjects: dndProjects2 };

      return updateObject(state, updatedState3);

    case "CLICKED_RIGHT_DND":
      let dndProjects3 = [...state.dndProjects];
      switch (action.activeProjectIndex) {
        case 3:
          dndProjects3[0].hidden = true;
          dndProjects3[0].position = "right";
          // --
          dndProjects3[action.activeProjectIndex + 2].hidden = false;
          break;
        case 4:
          dndProjects3[1].hidden = true;
          dndProjects3[1].position = "right";
          // --
          dndProjects3[0].hidden = false;
          break;
        case 5:
          dndProjects3[2].hidden = true;
          dndProjects3[2].position = "right";
          // --
          dndProjects3[1].hidden = false;
          break;

        default:
          dndProjects3[action.activeProjectIndex + 3].hidden = true;
          dndProjects3[action.activeProjectIndex + 3].position = "right";
          // --
          dndProjects3[action.activeProjectIndex + 2].hidden = false;
          break;
      }

      // sliding cards
      dndProjects3[action.activeProjectIndex].position = "left";
      dndProjects3[action.newActiveProjectIndex].position = "center";
      const updatedState4 = { dndProjects: dndProjects3 };

      return updateObject(state, updatedState4);

    default:
      return state;
  }
};
export default reducer;
