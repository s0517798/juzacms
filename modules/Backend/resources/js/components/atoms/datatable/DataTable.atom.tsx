import React, {useEffect, useState} from 'react';
import cx from 'classnames';
import {__} from '../../../utils/common';
import {JW_DataTableProps, JW_DataTableAction} from ".";
import axios from "axios";
import {JW_DataTableRowItem} from "./RowItem.atom";

export const JW_DataTable = ({data = {
    uniqueId: '',
    dataUrl: ''
}, options = {}}: Partial<JW_DataTableProps>) => {

    const [item, setItem] = useState({
        total: 0,
        rows: [],
    });

    useEffect(() => {
        axios.get(data.dataUrl)
            .then(res => {
                setItem(res.data)
            });
    })

    let hanldSubmitAction = function (event) {
        alert('aa');
    }

    return (
        <React.Fragment>
            <div className="row mb-3">
                <div className="col-md-4">
                    <form method="post" className="form-inline" onSubmit={hanldSubmitAction}>

                        <select
                            name="bulk_actions"
                            className="form-control select2-default"
                            data-width="120px"
                        >
                            <option value="">{__('Bulk Actions')}</option>

                            <JW_DataTableAction actions={data.actions} />
                        </select>

                        <button
                            type="submit"
                            className="btn btn-primary px-3"
                            id="apply-action">{__('Apply')}
                        </button>
                    </form>
                </div>

                <div className="col-md-8">
                    <form method="get" className="form-inline" id="form-search">


                        <button type="submit" className="btn btn-primary mb-2">
                            <i className="fa fa-search"></i> {__('Search')}
                        </button>
                    </form>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table jw-table" id={data.uniqueId}>
                    <thead>
                        <tr>
                            <th
                                style={{width: '3%'}}
                                data-checkbox="true">
                                <input type="checkbox" className='check-all' />
                            </th>
                            {
                                data?.columns.map((col, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <th
                                                style={{width: col.width}}
                                                align={col.align || 'left'}
                                                data-field={col.key}
                                                data-sortable={col.sortable || true}
                                            >
                                                {col.label || col.key.upperCase}
                                            </th>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                    {
                        item.rows.map((row, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td><input type="checkbox" value={row.id} /></td>
                                        {
                                            data?.columns.map((col, colIndex) => {
                                                return (
                                                    <React.Fragment key={colIndex}>
                                                        <JW_DataTableRowItem col={col} row={row} />
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </tr>
                                </React.Fragment>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
