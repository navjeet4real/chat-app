import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";

import { Autocomplete, TextField } from "@mui/material";

RHFAutoComplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helpertext: PropTypes.node,
};

export default function RHFAutoComplete({ name, label, helpertext, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Autocomplete
            {...field}
            fullWidth
            onChange={(event, newValue) =>
              setValue(name, newValue, {
                shouldValidate: true,
              })
            }
            error="false"
            helpertext={error ? error.message : helpertext}
            {...other}
            renderInput={(params) => (
              <TextField
                label={label}
                error={!!error}
                helpertext={error ? error.message : helpertext}
                {...params}
              />
            )}
          />
        )}
      />
    </>
  );
}
