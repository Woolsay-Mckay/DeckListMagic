import React from 'react';

import styles from './style.module.scss';

type AppProps = {
  children?: React.ReactNode;
};

export default ({ children }: AppProps): JSX.Element => <div className={styles.element}>{children}</div>;
