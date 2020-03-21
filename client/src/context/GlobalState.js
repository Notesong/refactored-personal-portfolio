import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";

// Initial state
const initialState = {
  isProject: true,
  pds: [
    {
      TitleStrong: "Tipsease",
      Desc: "Tip your server in three easy and secure steps.",
      TechStack: "HTML, LESS/CSS, Javascript",
      Link: "https://tipsease-buildweek.github.io/Lee-UI/",
      Github: "https://github.com/Tipsease-Buildweek/Lee-UI",
      Highlights: [
        "Designed and coded the landing-page.",
        "Used LESS/CSS and JavaScript to create the layout and functionality.",
        "Designed desktop and mobile versions."
      ],
      AdditionalDesc:
        "The Tipsease landing page was my first project for my first build week at Lambda School.  I worked on a team with five other people to create an landing page that could be used with the React app my teammates created. After coding the landing page, I also created the logo and favicon.  Overall, it was a great learning experience both for polishing up my HTML, CSS, and JavaScript skills, and also for learning the in's and out's of working with a team, using Zoom Meetings, GitHub, Trello, and Slack as our bases for communcation.",
      Img: "/images/tipsease.jpg"
    },
    {
      Title: "Celebrity",
      TitleStrong: "Dead or Alive",
      Desc:
        "Tests your celebrity knowledge on whether a celebrity is alive or dead.",
      TechStack:
        "React, API calls, Authentication, Formik, HTML, CSS, JavaScript",
      Link: "https://celebritydeadoralive5.netlify.com",
      Github: "https://github.com/Celebrity-Dead-or-Alive-5/front-end",
      Highlights: [
        "Used React-Router-Dom for the navagation",
        "Coded the timed quiz that sends user information back to the server and displays stats to the user using context api.",
        "Created login and signup pages with Formik and authentication",
        "Used Axios with the API.",
        "Designed desktop and mobile versions."
      ],
      Img: "/images/deadoralive.jpg"
    },
    {
      Title: "Better",
      TitleStrong: "Professor",
      Desc:
        "Helps mentors keep track of their students and their projects. This project is still a work in progress.",
      TechStack:
        "React, Context API, Reducers, API calls, Authentication, HTML, CSS, JavaScript",
      Link: "https://better-professor-frontend.netlify.com/",
      Github: "https://github.com/Notesong/better-professor-frontend",
      Highlights: ["to be added soon"],
      Img: "/images/betterprofessor.jpg"
    }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function setIsProject(isProjectPage) {
    dispatch({
      type: "SET_IS_PROJECT",
      payload: isProjectPage
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        isProject: state.isProject,
        pds: state.pds,
        setIsProject
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
