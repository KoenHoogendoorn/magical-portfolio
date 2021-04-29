export const setActiveFeaturedProject = (index) => {
  return {
    type: "SET_ACTIVE_FEATURED_PROJECT",
    index: index
  };
};

export const cloneDndProjects = () => {
  return {
    type: "CLONE_DND_PROJECTS"
  };
};

export const clickedLeftDnd = (activeProjectIndex, newActiveProjectIndex) => {
  return {
    type: "CLICKED_LEFT_DND",
    activeProjectIndex: activeProjectIndex,
    newActiveProjectIndex: newActiveProjectIndex
  };
};

export const clickedRightDnd = (activeProjectIndex, newActiveProjectIndex) => {
  return {
    type: "CLICKED_RIGHT_DND",
    activeProjectIndex: activeProjectIndex,
    newActiveProjectIndex: newActiveProjectIndex
  };
};
