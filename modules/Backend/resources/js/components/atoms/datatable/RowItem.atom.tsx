import React from 'react';
import Parser from "html-react-parser";
import {Link} from "@inertiajs/inertia-react";
import {baseUrl} from "../../../utils/common";
import {JW_DataTableRowItemProps} from '.';
import cx from "classnames";

export const JW_DataTableRowItem = (
    {
        col = {
            key: '',
        },
        row = {
            key: '',
        }
    }: Partial<JW_DataTableRowItemProps>) => {

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
                    <Link href={row.edit_url}>{row.origin_value[col.key]}</Link>
                </div>
                <ul className="list-inline mb-0 list-actions mt-2 ">
                    {
                        Object.entries(row.actions).map(([key, item]) => {
                            let url = item.url?.replace(baseUrl(), '');
                            if (item.target == '_blank') {
                                return (
                                    <li key={key} className="list-inline-item">
                                        <a
                                            href={url}
                                            target='_blank'
                                            className={'jw-table-row' + (item.class ? ' '+item.class : '') + (item.action ? ' action-item' : '')}
                                            data-id={item.id}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            }

                            return (
                                <li key={key} className="list-inline-item">
                                    <Link
                                        href={url}
                                        className={'jw-table-row' + (item.class ? ' '+item.class : '') + (item.action ? ' action-item' : '')}
                                        data-id={item.id}
                                        data-action={item.action}
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
