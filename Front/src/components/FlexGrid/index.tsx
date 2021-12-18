import React from 'react';
import classnames from 'classnames';

import styles from './style.module.scss';

type AppProps = {
  className?: string | undefined;
  children: React.ReactNode | React.ReactNodeArray;
};
export default ({ className, children }: AppProps): JSX.Element => (
  <div className={classnames(styles.container, className)}>{children}</div>
);
