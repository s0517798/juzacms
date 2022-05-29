import React from 'react';
import {__} from '../../../utils/common';

export const JW_DataTableAction = ({actions = []}) => {
    return (
        <React.Fragment>
            {
                Object.entries(actions).map(([key, item]) => {
                    return (
                        <option key={key} value={key}>
                            {item.label || item}
                        </option>
                    )
                })
            }
        </React.Fragment>
    )
}
