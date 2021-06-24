/** @jsxImportSource @emotion/react */
import SkillItem from "./SkillItem.js";
import openingQuote from "./img/opening-quote.svg";
import closingQuote from "./img/closing-quote.svg";

const Quote = ({ text, maxWidth }) => {
  return (
    <div css={{ display: "flex", justifyContent: "center" }}>
      <blockquote
        css={{
          maxWidth: maxWidth,
          textAlign: "center",
          position: "relative",
          "&:before": {
            content: `url(${openingQuote})`,
            position: "absolute",
            top: -15,
            left: -45,
          },
          "&:after": {
            content: `url(${closingQuote})`,
            position: "absolute",
            bottom: -15,
            right: -45,
          },
        }}
      >
        {text}
      </blockquote>
    </div>
  );
};

const Main = ({ skills, onSkillsChange, location }) => {
  const listCss = {
    listStyleType: "none",
    paddingLeft: 0,

    li: {
      display: "flex",

      ":not(:first-of-type)": { marginTop: ".7em" },

      "&:before": { content: `'–'`, marginRight: ".5em" },
    },
  };

  return (
    <div
      css={{
        paddingTop: "2.5em",
        paddingBottom: "2.5em",
      }}
    >
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: 25,

          "@media all and (min-width: 768px) and (max-width: 1280px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },

          "@media all and (min-width: 1280px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
          },
        }}
      >
        <div>
          <h2>Portfolio</h2>
          <ul css={listCss}>
            <li>
              <a href="./">Bootstrap 4 Material Design (Sample Link)</a>
            </li>
            <li>
              <a href="./">Modern JavaScript stack</a>
            </li>
            <li>
              <a href="./">Datepicker for twitter bootstrap</a>
            </li>
            <li>
              <a href="./">Fast and reliable Bootstrap widgets in Angular</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Experience</h2>
          <ul css={listCss}>
            {skills.map((skill, index) => (
              <SkillItem
                skill={skill}
                index={index}
                onYearsValueChange={(value) => {
                  const skillsCopy = [...skills];
                  skillsCopy[index].years = +value;
                  onSkillsChange(skillsCopy);
                }}
              />
            ))}
          </ul>
        </div>
        <div>
          <h2>Sample code</h2>
          <div
            css={{
              display: "flex",
              backgroundColor: "#f0f1f2",
              padding: "1em",
              borderRadius: 8,
              fontSize: ".75em",
            }}
          >
            <div
              css={{
                fontFamily: `'Roboto Mono', monospace`,
                color: "#787979",
                marginRight: "1em",
                lineHeight: 1.66,
              }}
            >
              1.
              <br />
              2.
              <br />
              3.
              <br />
              4.
              <br />
              5.
              <br />
              6.
              <br />
            </div>
            <div>
              <pre css={{ margin: 0 }}>
                <code
                  css={{
                    fontFamily: `'Roboto Mono', monospace`,
                    lineHeight: 1.66,
                  }}
                >
                  &#x3c;
                  <span css={{ color: "#FF0000" }}>&#x64;&#x69;&#x76;</span>
                  &#160;
                  <span css={{ color: "#aa3637" }}>
                    &#x63;&#x6c;&#x61;&#x73;&#x73;
                  </span>
                  &#x3d;&#x27;
                  <span css={{ color: "#299429" }}>
                    &#x67;&#x6f;&#x6c;&#x64;&#x65;&#x6e;&#x2d;&#x67;&#x72;&#x69;&#x64;
                  </span>
                  &#x27;&#x3e; <br />
                  &#160;&#160;&#160;&#160;&#x3c;
                  <span css={{ color: "#FF0000" }}>&#x64;&#x69;&#x76;</span>
                  &#160;
                  <span css={{ color: "#aa3637" }}>
                    &#x73;&#x74;&#x79;&#x6c;&#x65;
                  </span>
                  &#x3d;&#x27;
                  <span css={{ color: "#299429" }}>
                    &#x67;&#x72;&#x69;&#x64;&#x2d;&#x61;&#x72;&#x65;&#x61;&#x3a;
                  </span>{" "}
                  <br />
                  &#160;&#160;&#160;&#160;&#160;&#160;
                  <span css={{ color: "#299429" }}>
                    &#x31;&#x31;&#160;&#x2f;&#160;&#x31;&#160;&#x2f;&#160;&#x73;&#x70;&#x61;&#x6e;&#160;&#x31;&#x30;&#160;&#x2f;&#160;&#x73;&#x70;&#x61;&#x6e;
                  </span>{" "}
                  <br />
                  &#160;&#160;&#160;&#160;&#160;&#160;
                  <span css={{ color: "#299429" }}>&#x31;&#x32;&#x3b;</span>
                  &#x27;&#x3e; <br />
                  &#160;&#160;&#160;&#160;&#x3c;&#x2f;
                  <span css={{ color: "#FF0000" }}>&#x64;&#x69;&#x76;</span>
                  &#x3e; <br />
                  &#x3c;&#x2f;
                  <span css={{ color: "#FF0000" }}>&#x64;&#x69;&#x76;</span>
                  &#x3e; <br />
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div>
          <h2>Availability</h2>
          Full-time
          <h3>Preferred environment</h3>
          GitHub, Mac OS X
        </div>
        <div>
          <h2 css={{ marginTop: 0, marginBottom: "2em" }}>
            The most amazing...
          </h2>
          <Quote
            text="The only true wisdom is in knowing you know nothing..."
            maxWidth={220}
          />
        </div>
        <div>
          <h2 css={{ marginTop: 0, marginBottom: "2em" }}>
            In clients I look for...
          </h2>
          <Quote
            text="There is only one good, knowledge, and one evil, ignorance."
            maxWidth={180}
          />
        </div>
        <div
          css={{
            gridColumn: "1 / span 1",

            "@media all and (min-width: 768px) and (max-width: 1280px)": {
              gridColumn: "1 / span 2",
            },

            "@media all and (min-width: 1280px)": {
              gridColumn: "3 / span 2",
            },
          }}
        >
          <iframe
            css={{
              border: 0,
              width: "100%",
              height: 200,
            }}
            loading="lazy"
            allowfullscreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAD8OciY2iU6Cl3ghbq4SwyaeX9O1d8ZOY&q=${encodeURIComponent(
              location,
            )}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Main;
