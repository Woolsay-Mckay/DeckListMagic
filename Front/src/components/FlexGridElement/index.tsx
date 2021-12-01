import React from 'react';
import classnames from 'classnames';

import styles from './style.module.scss';

type AppProps = {
  children?: React.ReactNode;
  className?: string;
};

export default ({ children, className }: AppProps): JSX.Element => (
  <div className={classnames(styles.element, className)}>{children}</div>
);
