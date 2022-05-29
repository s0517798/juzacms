import React from 'react';
import { JW_InputProps } from '.';
import cx from 'classnames';

export const JW_Select = ({label, name, options = {}}: Partial<JW_InputProps>) => {
  return (
    <React.Fragment>
        <div className={cx('form-group')}>
            <label>{label}</label>
            <select name={name} id={options.id} className={cx('form-control', options.class)}>



                <option value=""></option>
            </select>
        </div>
    </React.Fragment>
  );
};
