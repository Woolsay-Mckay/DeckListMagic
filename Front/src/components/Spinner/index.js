import React from 'react';
import classnames from 'classnames';

import styles from './spinner.module.css';

export const Spinner = () => (
  <div className={classnames('spinner-border spinner-border-sm', styles.spinnerBorder)} role="status"></div>
);

export default Spinner;
