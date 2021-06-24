/** @jsxImportSource @emotion/react */
import { useState } from "react";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

const LocationInput = ({ location, onLocationChange }) => {
  const [inputValue, setInputValue] = useState(location);

  return (
    <div>
      <TextField
        trailingIcon={<MaterialIcon role="button" icon="check_circle" />}
      >
        <Input
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onLocationChange(inputValue);
            }
          }}
          onBlur={() => {
            if (inputValue) {
              onLocationChange(inputValue);
            }
          }}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
          }}
        />
      </TextField>
    </div>
  );
};

export default LocationInput;
