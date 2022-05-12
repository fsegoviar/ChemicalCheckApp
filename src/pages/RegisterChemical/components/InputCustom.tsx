import React from 'react';
import {styled, TextField} from "@mui/material";

const CssTextField = styled(TextField)({
  backgroundColor: "white",
  borderRadius: 4,
  width: "90%",
  '& label.Mui-focused': {
    color: 'black',
    fontWeight: 'bold'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const InputCustom = ({label, name}: any) => {
  return (
    <CssTextField label={label} name={name} />
  );
};

export default InputCustom;