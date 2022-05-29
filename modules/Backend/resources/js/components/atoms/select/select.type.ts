export type JW_InputProps = {
    label: string;
    name: string;
    options: {
        class?: string;
        id?: string;
        value?: string;
        onChange?: any;
        data?: Object;
        selected?: boolean;
        multiple?: boolean;
        readonly?: boolean;
        disabled?: boolean;
    };
};
