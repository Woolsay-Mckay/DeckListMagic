import React from 'react';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField';

export default ({
  name,
  className = undefined,
  placeholder = '',
  values = undefined,
  errors = {},
  touched = {},
  ...rest
}: Omit<TextFieldProps, 'variant' | 'margin' | 'label' | 'error'> & {
  name: string;
  className?: string;
  placeholder?: string;
  values?: any;
  errors: {
    [key: string]: { message: string };
  };
  touched: {
    [key: string]: string;
  };
}) => (
  <TextField
    name={name}
    className={className}
    label={placeholder}
    margin="normal"
    variant="outlined"
    error={!!(errors[name] && touched[name])}
    helperText={touched[name] && errors[name] ? errors[name].message : null}
    {...rest}
  />
);
