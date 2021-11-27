import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'react-use';
import * as yup from 'yup';

import TextField from 'components/TextField';

import { searchCards, updateText } from './slice';
import styles from './style.module.scss';
import { RootState } from 'authentificatedPages/rootReducer';

const schema = yup.object().shape({
  cardText: yup.string().min(3, '3 caractères minimum'),
});

interface Form {
  cardText: string;
}

export default (): JSX.Element => {
  const dispatch = useDispatch();
  const [val, setVal] = React.useState('');

  const searchState = useSelector((state: RootState) => state.searchCards);

  const {
    register,
    errors,
    formState: { touched, isValid },
    setValue,
  } = useForm<Form>({
    validationSchema: schema,
    mode: 'onChange',
  });

  React.useEffect(() => {
    if (searchState.searchText !== val) {
      setValue('cardText', searchState.searchText);
    }
  }, [searchState.searchText]);

  useDebounce(
    () => {
      if (val.length >= 3) {
        dispatch(updateText(val));
        dispatch(searchCards());
      }
    },
    800,
    [val],
  );

  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setVal(e.target.value);
  };

  const TextFieldProps = {
    touched,
    errors,
    inputRef: register,
  };

  return (
    <TextField
      className={styles['searchCards__input']}
      name="cardText"
      type="text"
      placeholder="Nom de la carte"
      onChange={onUpdate}
      {...TextFieldProps}
    />
  );
};
