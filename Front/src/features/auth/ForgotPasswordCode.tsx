import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import { askForForgotPasswordCode, askForForgotPasswordStop } from 'features/auth/authSlice';
import { RootState } from 'authentificatedPages/rootReducer';
import { Spinner } from 'components/Spinner';
import TextField from 'components/TextField';

const schema = yup.object().shape({
  code: yup.string().required('Le code est obligatoire'),
});

interface Form {
  code: string;
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
  const { email } = auth.forgotPasswordData;

  const onSubmit = ({ code }: Form) => {
    dispatch(askForForgotPasswordCode(code));
  };

  const onCancel = () => {
    dispatch(askForForgotPasswordStop());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Réinitialisez votre mot de passe </h1>
      <div className="error-message c8 my-3">{error?.message}</div>
      <p className="m-0 p-0">
        Un e-mail de réinitialisation de mot de passe a été envoyé à {email}.
        <br />
        Veuillez entrer le code que vous avez reçu ci-dessous :
      </p>
      <TextField name="code" type="text" placeholder="000000" {...TextFieldProps} />
      <button type="submit" className="mt-4" disabled={!isValid}>
        {loading ? <Spinner /> : 'Valider'}
      </button>
      <div className="form-text-action" onClick={onCancel}>
        Annuler
      </div>
    </form>
  );
}
