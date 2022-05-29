export type JW_DataTableProps = {
    data: {
        uniqueId: string,
        dataUrl: string,
        columns?: Array<any>,
        actions?: Array<any>
    },
    options: {
        class?: string,
    };
};
