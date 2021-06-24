/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

const NameInput = () => {
  const [name, setName] = useState('John Smith');
  const [nameValid, setNameValid] = useState(true);

  return (
    <div css={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
      <TextField
        helperText={!nameValid && (
          <HelperText css={{
            fontSize: 14,
            color: '#eb5757 !important',
          }}>
            Can't contain special characters
          </HelperText>
        )}
        trailingIcon={<MaterialIcon role="button" icon={nameValid ? 'check_circle' : 'cancel'} />}
        css={{ height: '48px !important' }}
      >
        <Input
          value={name}
          onChange={(e) => {
            setNameValid(/^[A-Z a-zА-Яа-я0-9-]*$/.test(e.currentTarget.value));
            setName(e.currentTarget.value);
          }}
          isValid={nameValid}
          css={{
            fontSize: '2.5em',
            fontWeight: 500,
          }} />
      </TextField>
    </div>
  );
};

export default NameInput;