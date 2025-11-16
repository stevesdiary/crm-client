import React from 'react';
import { TextField, StandardTextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

const FloatingLabelInput: React.FC<StandardTextFieldProps> = (props) => {
  return <StyledTextField {...props} variant="outlined" />;
};

export default FloatingLabelInput;