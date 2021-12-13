import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import { RootState } from 'authentificatedPages/rootReducer';
import { signUp } from 'features/auth/authSlice';
import { Spinner } from 'components/Spinner';
import TextField from 'components/TextField';
import { emailRegex } from 'utils/regexp';

const schema = yup.object().shape({
  email: yup.string().required("L'adresse mail est obligatoire").matches(emailRegex, "La courriel n'est pas valide"),
  password: yup.string().required('Le mot de passe est obligatoire'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), undefined], 'Les mots de passe ne correspondent pas'),
});

interface Form {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  code: string;
}

export default function SignUp(): JSX.Element {
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
  const { loading, error } = auth.signUpForm;

  const onSubmit = ({ email, password, firstname, lastname }: Form) => {
    dispatch(signUp(email, password, firstname, lastname));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="m-auto">
      <h1 className="">Inscription</h1>
      <div className="error-message c8 my-3">{error?.message}</div>
      <TextField name="email" type="email" placeholder="Email" {...TextFieldProps} />
      <TextField name="password" type="password" placeholder="Mot de passe" autoComplete="off" {...TextFieldProps} />
      <TextField
        name="passwordConfirmation"
        type="password"
        placeholder="Confirmez votre mot de passe"
        autoComplete="off"
        {...TextFieldProps}
      />
      <TextField name="firstname" type="text" placeholder="Prénom" {...TextFieldProps} />
      <TextField name="lastname" type="text" placeholder="Nom" {...TextFieldProps} />
      <button type="submit" className="mt-4" disabled={!isValid}>
        {loading ? <Spinner /> : 'Valider'}
      </button>
    </form>
  );
}
