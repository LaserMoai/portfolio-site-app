/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";
import TextField, { Input } from "@material/react-text-field";

const SkillItem = ({ skill, index, onYearsValueChange }) => {
  const [editing, setEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState(skill.years);
  const inputEl = useRef(null);

  const focusTextField = () => {
    if (!inputEl) return;
    const inputElement = inputEl.current.inputElement;
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <li key={skill.id}>
      <strong css={{ marginRight: ".5em" }}>{skill.name}</strong>
      {editing ? (
        <TextField>
          <Input
            type="number"
            lang="ru"
            step="0.1"
            value={fieldValue}
            ref={inputEl}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditing(false);
                onYearsValueChange(fieldValue);
              }
            }}
            onBlur={(e) => {
              setEditing(false);
              onYearsValueChange(fieldValue);
            }}
            onChange={(e) => setFieldValue(e.currentTarget.value)}
            css={{ maxWidth: 50 }}
          />
        </TextField>
      ) : (
        <span
          lang="ru"
          onClick={() => {
            setFieldValue(skill.years);
            setEditing(true);
            setTimeout(focusTextField, 0);
          }}
          className="link"
          css={{
            borderBottom: "1px dashed #3483CC",
            cursor: "pointer",

            "&:hover, &:active": {
              borderBottomColor: "transparent",
            },
          }}
        >
          {`${skill.years} year${skill.years !== 1 ? "s" : ""}`}
        </span>
      )}
    </li>
  );
};

export default SkillItem;
