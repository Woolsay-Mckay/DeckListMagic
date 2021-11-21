import React from 'react';
import { TextField } from '@material-ui/core';
import { boolean } from 'yup';

export default ({
  name,
  className = undefined,
  placeholder = '',
  values = undefined,
  errors = {},
  touched = {},
  ...rest
}: {
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
