/** @jsxImportSource @emotion/react */
import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import "@material/react-text-field/dist/text-field.css";
import "@material/react-material-icon/dist/material-icon.css";

function App() {
  const [location, setLocation] = useState("Portand, Oregon, USA");
  const [skills, setSkills] = useState([
    {
      id: 0,
      name: "PHP",
      years: 6,
    },
    {
      id: 2,
      name: "JavaScript",
      years: 4.5,
    },
    {
      id: 1,
      name: "Ruby",
      years: 2,
    },
  ]);

  const handleSkillsChange = (newSkillsValue) => {
    setSkills(
      newSkillsValue.sort((value1, value2) => value2.years - value1.years),
    );
  };

  return (
    <div
      css={{
        h2: {
          fontSize: "1.5em",
          fontWeight: 500,
        },

        h3: {
          fontSize: "1.25em",
          fontWeight: 500,
        },

        "a, .link": {
          color: "#3483CC",
          textDecorationLine: "none",

          "&:hover": {
            color: "#EB5757",
          },
          "&:active": {
            color: "#c74343",
          },
        },

        "> *": {
          display: "flex",
          justifyContent: "center",
          paddingLeft: "2em",
          paddingRight: "2em",

          "> *": {
            "@media all and (min-width: 768px) and (max-width: 1280px)": {
              width: 600,
            },

            "@media all and (min-width: 1280px)": {
              width: 1130,
            },
          },
        },

        ".mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea)":
          {
            height: 24,
            backgroundColor: "transparent",

            "&.mdc-text-field--focused": {
              ".mdc-text-field__icon": {
                color: "#33c127 !important",
              },
            },

            "&.mdc-text-field--invalid": {
              ".mdc-text-field__icon": {
                color: "#eb5757 !important",
              },
            },

            "&:not(.mdc-text-field--focused)": {
              ".mdc-text-field__input": {
                borderBottomColor: "transparent !important",
              },
            },

            "&.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input":
              {
                padding: 0,
              },

            "&.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input":
              {
                borderBottomColor: "#eb5757",
              },

            ".mdc-text-field__input": {
              backgroundColor: "transparent",

              "&:hover": {
                backgroundColor: "#e2e3e3",
              },
            },

            ".mdc-text-field__icon": {
              fontSize: "1.1em",
              top: "50%",
              bottom: "initial",
              transform: "translateY(-50%)",
              color: "transparent !important",
            },
          },
        ".mdc-text-field .mdc-line-ripple": {
          backgroundColor: "#000000",
        },
        ".mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple":
          {
            backgroundColor: "#EB5757",
          },
      }}
    >
      <Header
        skills={skills}
        onSkillsChange={handleSkillsChange}
        location={location}
        onLocationChange={setLocation}
      />
      <Main
        skills={skills}
        onSkillsChange={handleSkillsChange}
        location={location}
      />
    </div>
  );
}

export default App;
