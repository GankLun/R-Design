/// <reference types="react" />
import React from 'react';

export interface RDateTimePickerProps{
    keyName?: string;
    initialValue?: string|Date;
    rules?: Array;
    mode?:string;
    label?:string | JSX.Element;
    extra?:string | JSX.Element;
    minuteStep?: number;
    onOk?: (value?: any) => void;
    onDismiss?:() => void;
    onChange?: (value: Date) => void;
    onValueChange?: (vals: any, index: number) => void;
    disabled?:boolean;
    value?:string|Date;
    dismissText?:string | JSX.Element;
    okText?:string | JSX.Element;
    format?: string | ((value: Date) => string);
    triggerComponent?:any;
}

declare class RDateTimePicker extends React.Component<RDateTimePickerProps, any> {
    static defaultProps: {
        keyName: string;
        initialValue: string|Date;
        rules: Array;
        mode:string;
        label:string | JSX.Element;
        extra:string | JSX.Element;
        minuteStep: number;
        onOk: (value?: any) => void;
        onDismiss:() => void;
        onChange: (value: Date) => void;
        onValueChange: (vals: any, index: number) => void;
        disabled:boolean;
        value:string|Date;
        dismissText:string | JSX.Element;
        okText:string | JSX.Element;
        format: string | ((value: Date) => string);
        triggerComponent:any;
    };

    render(): JSX.Element;
}

export default RDateTimePicker;