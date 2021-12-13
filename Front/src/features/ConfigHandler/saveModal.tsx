import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { RootState } from 'authentificatedPages/rootReducer';
import Modal from 'components/Modal';
import { setSaveModalOpened } from './slice';

const schema = yup.object().shape({
  applicationName: yup.string().required('The application name is required'),
});

interface Form {
  applicationName: string;
}

interface Props {
  open: boolean;
  onClose?: () => any;
}

export default function NewProjectModal(props: Props): JSX.Element {
  const dispatch = useDispatch();
  // const { loading, credentials } = useSelector((state: RootState) => state.auth.addModal);

  const onSubmit = async ({ applicationName }: Form) => {
    // dispatch(addProject(applicationName));
  };

  const onClose = () => {
    dispatch(setSaveModalOpened(false));
  };

  // if (credentials) {
  //   return <Modal {...props}>Toto</Modal>;
  // }

  return (
    <Modal {...props}>
      <div onClick={() => onClose()} style={{ maxWidth: 200 }} className="button outline">
        Annuler
      </div>
    </Modal>
  );
}
