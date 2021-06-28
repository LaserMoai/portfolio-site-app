/** @jsxImportSource @emotion/react */
import NameInput from "./NameInput";
import LocationInput from "./LocationInput";
import SkillsInput from "./SkillsInput";
import photoSrc from "./img/subject.png";
import photoIcon from "./img/reload-icon.svg";

const Header = ({ skills, onSkillsChange, location, onLocationChange }) => {
  return (
    <div
      css={{
        background: "#f0f1f3",
        paddingTop: "2.5em",
        paddingBottom: "1em",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          "@media all and (min-width: 768px)": {
            flexDirection: "row",
            alignItems: "flex-start",
          },
        }}
      >
        <div
          css={{
            marginRight: "1.5em",
            position: "relative",
            cursor: "pointer",

            "&:before": {
              content: `''`,
              position: "absolute",
              top: 3,
              left: 3,
              right: 3,
              bottom: 9,
              borderRadius: "50%",
            },

            "&:hover:before": {
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
            },

            "&:hover .photo-icon": {
              opacity: 1,
            },
          }}
        >
          <img src={photoSrc} alt="Subject" />
          <div
            className="photo-icon"
            css={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "#3483CC",
              opacity: 0,
            }}
          >
            <img src={photoIcon} alt="" />
          </div>
        </div>
        <div css={{ "> *:not(:last-child)": { marginBottom: 14 } }}>
          <NameInput />

          <LocationInput
            location={location}
            onLocationChange={onLocationChange}
          />

          <div>🇬🇧 English</div>

          <SkillsInput skills={skills} onSkillsChange={onSkillsChange} />
        </div>
        <a
          href="./"
          onClick={window.print}
          css={{
            order: -1,
            marginLeft: 0,
            display: "flex",
            alignItems: "center",

            "@media all and (min-width: 768px)": {
              order: 0,
              marginLeft: "auto",
            },

            svg: {
              color: "#b3bac0",
            },

            "&:hover svg": {
              color: "#EB5757",
            },
            "&:active svg": {
              color: "#c74343",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            css={{ display: "block", marginRight: ".5em" }}
          >
            <path
              d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z"
              fill="currentColor"
            />
          </svg>
          Print&nbsp;this&nbsp;page
        </a>
      </div>
    </div>
  );
};

export default Header;
