import React from "react";
// import PropTypes from 'prop-types';
import { Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { Controller , useFormContext } from "react-hook-form";
import useEventListener from '../../hooks/useEventListner';

// RHFCodes.propTypes = {
//     keyName: PropTypes.string,
//     inputs: PropTypes.arrayOf(PropTypes.string),
//   };

export default function RHFCodes ({ keyName = "", inputs = [], ...other }) {
  debugger
  const codesRef = useRef(null);

  const { control, setValue } = useFormContext();

  console.log(inputs,"inputs")

  const handlePaste = (event) => {
    let data = event.clipboardData.getData('text');

    data = data.split('');

    inputs.map((input, index) => setValue(input, data[index]));

    event.preventDefault();
  };

  const handleChangeWithNextField = (event, handleChange) => {
    const {maxLength, value, name} = event.target;

    const fieldIndex = name.replace(keyName, "")
    const fieldIntIndex = Number(fieldIndex);

    const nextField = document.querySelector(`input[name=${keyName}${fieldIntIndex+1}]`)

    if(value.length > maxLength){
        event.target.value = value[0]
    }
    if(value.length >=maxLength && fieldIntIndex < 6 && nextField !== null){
        nextField.focus();
    }
    handleChange(event);
  }

  useEventListener('paste', handlePaste, codesRef);
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="center" ref={codesRef}>
        {inputs.map((name, index) => (
          <Controller
            key={name}
            name={`${keyName}${index + 1}`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                autoFocus={index === 0}
                placeholder="-"
                onChange={(event) => {
                  handleChangeWithNextField(event, field.onChange)
                }}
                onFocus={(event) => event.currentTarget.select()}
                InputProps={{
                    sx: {
                        width: {xs: 36, sm: 56},
                        height: {xs: 36, sm: 56},
                        '& input': {p: 0, textAlign: 'center'}
                    }
                }}

                inputProps={{
                    maxLength: 1,
                    type: 'number'
                }}
                {...other}
              />
            )}
          />
        ))}
      </Stack>
    </>
  );
};

// export default RHFCodes;
