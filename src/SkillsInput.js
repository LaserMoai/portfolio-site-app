/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const SkillsInput = ({ skills, onSkillsChange }) => {
  const [showInput, setShowInput] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const inputEl = useRef(null);

  const submitSkill = () => {
    onSkillsChange([
      ...skills,
      {
        id: skills.length,
        name: fieldValue,
        years: 0,
      },
    ]);
  };

  const focusTextField = () => {
    if (!inputEl) return;
    const inputElement = inputEl.current.inputElement;
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div
      css={{
        display: "flex",
        flexWrap: "wrap",

        "> div": {
          "&:not(.mdc-text-field)": {
            color: "#ffffff",
            backgroundColor: "#333333",
            fontSize: ".875em",
            padding: ".3em .6em",
            borderRadius: 4,

            "&:last-of-type": {
              fontSize: "1.3em",
              padding: "0 .3em",
            },

            "&:hover": {
              backgroundColor: "#666666",
            },
          },
          "&:not(:first-of-type)": { marginLeft: ".5em" },
        },
      }}
    >
      {skills.map((skill, index) => (
        <div
          key={skill.id}
          css={{
            position: "relative",
            "&:hover .material-icons": { display: "block" },
          }}
        >
          {skill.name}
          <MaterialIcon
            role="button"
            icon="cancel"
            onClick={() => {
              onSkillsChange([
                ...skills.slice(0, index),
                ...skills.slice(index + 1, skills.length),
              ]);
            }}
            css={{
              color: "#eb5757",
              backgroundColor: "#ffffff",
              fontSize: "1.4em",
              position: "absolute",
              top: -11,
              right: -11,
              borderRadius: "50%",
              cursor: "pointer",
              display: "none",
            }}
          />
        </div>
      ))}
      <TextField
        trailingIcon={<MaterialIcon role="button" icon="check_circle" />}
        css={{ display: !showInput && "none" }}
      >
        <Input
          value={fieldValue}
          ref={inputEl}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitSkill();
              setShowInput(false);
              setFieldValue("");
            }
          }}
          onBlur={() => {
            if (fieldValue) {
              submitSkill();
            }
            setShowInput(false);
            setFieldValue("");
          }}
          onChange={(e) =>
            e.currentTarget && setFieldValue(e.currentTarget.value)
          }
        />
      </TextField>
      <div
        onClick={() => {
          setShowInput(true);
          setTimeout(focusTextField, 0);
        }}
        css={{
          display: showInput && "none",
          cursor: "pointer",
        }}
      >
        +
      </div>
    </div>
  );
};

export default SkillsInput;
