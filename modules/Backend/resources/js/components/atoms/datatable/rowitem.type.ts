export type JW_DataTableRowItemProps = {
    col: {
        key: string,
    },
    row: {
        key: string,
        edit_url?: string,
        action?: string,
        origin_value?: object,
        action_column?: string,
        actions?: Array<any>
    };
};
