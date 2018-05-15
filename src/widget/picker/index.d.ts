/// <reference types="react" />
import React from 'react';

export interface RPickerProps{
    keyName?: string;
    initialValue?: Array;
    rules?: Array;
    cols:number;
    label?:string | React.ReactElement<any>;
    extra?:string | React.ReactElement<any>;
    onOk?: (value: any) => void;
    onDismiss?:(_?: any) => void;
    onChange?:(_?: any) => void;
    onPickerChange?:(_?: any) => void;
    data?:Array;
    disabled?:boolean;
    value?:Array;
    dismissText?:string | React.ReactElement<any>;
    okText?:string | React.ReactElement<any>;
    format?: (values: string[]) => string;
    itemStyle?:any;
    indicatorStyle?:any;
    cascade?:boolean;
    triggerComponent?:any;
}

declare class RPicker extends React.Component<RPickerProps, any> {
    static defaultProps: {
        keyName: string;
        initialValue: string|Date;
        rules: Array;
        cols:number;
        label:string | JSX.Element;
        extra:string | JSX.Element;
        onOk: (v: any) => void;
        onDismiss:(_?: any) => void;
        onChange:(_?: any) => void;
        onPickerChange:(_?: any) => void;
        data:Array;
        disabled:boolean;
        value:Array;
        dismissText:string | JSX.Element;
        okText:string | JSX.Element;
        format: (values: string[]) => string;
        itemStyle:any;
        indicatorStyle:any;
        cascade:boolean;
        triggerComponent:any;
    };

    render(): JSX.Element;
}

export default RPicker;