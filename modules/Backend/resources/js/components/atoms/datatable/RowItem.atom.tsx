import React from 'react';
import Parser from "html-react-parser";
import {Link} from "@inertiajs/inertia-react";

export const JW_DataTableRowItem = (
    {
        col = {
            key: '',
        },
        row = {
            key: '',
            origin_value: Object,
            action_column: '',
            actions: Array<any>
        }
    }) => {

    if (row.action_column !== col.key) {
        return (
            <React.Fragment>
                <td>
                    {Parser(row[col.key])}
                </td>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <td>
                <div className="font-weight-bold">
                    <Link href="">{row.origin_value[col.key]}</Link>
                </div>
                <ul className="list-inline mb-0 list-actions mt-2 ">
                    {
                        Object.entries(row.actions).map(([key, item]) => {
                            return (
                                <li key={key} className="list-inline-item">
                                    <Link
                                        href={item.url}
                                        className="jw-table-row"
                                        data-id={item.id}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </td>
        </React.Fragment>
    )
}
