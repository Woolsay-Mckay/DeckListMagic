import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import { askForForgotPasswordNewPassword, askForForgotPasswordStop } from 'features/auth/authSlice';
import { RootState } from 'authentificatedPages/rootReducer';
import { Spinner } from 'components/Spinner';
import TextField from 'components/TextField';

// import { passwordRegex } from '../../utils/regexp';

const schema = yup.object().shape({
  password: yup
    .string()
    // .matches(
    //   passwordRegex,
    //   'Password must have uppercase, symbol characters and must have length greater than or equal to 6',
    // )
    .required('Le mot de passe est obligatoire'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), undefined], 'Les mots de passent ne coïncide pas'),
});

interface Form {
  password: string;
  passwordConfirmation: string;
}

export default function ForgotPasswordAsk(): JSX.Element {
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    formState: { touched, isValid },
  } = useForm<Form>({
    validationSchema: schema,
    mode: 'onChange',
  });

  const TextFieldProps = {
    touched,
    errors,
    inputRef: register,
    values: getValues(),
  };

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const { loading, error } = auth.forgotPasswordForm;
  const { email = '', code = '' } = auth.forgotPasswordData;

  const onSubmit = ({ password }: Form) => {
    dispatch(askForForgotPasswordNewPassword(email, code, password));
  };

  const onCancel = () => {
    dispatch(askForForgotPasswordStop());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Mettre à jour votre mot de passe</h1>
      <div className="error-message c8 my-3">{error?.message}</div>
      <TextField name="password" type="password" placeholder="Mot de passe" {...TextFieldProps} />
      <TextField
        name="passwordConfirmation"
        type="password"
        placeholder="Confirmez votre mot de passe"
        {...TextFieldProps}
      />
      <button type="submit" className="mt-4" disabled={!isValid}>
        {loading ? <Spinner /> : 'Valider'}
      </button>
      <div className="form-text-action" onClick={onCancel}>
        Annuler
      </div>
    </form>
  );
}
