/// <reference types="react" />
import React from 'react';

export interface RProgressDialogProps{
    visible?: boolean;
    onClose?: () => void;
    tip?: string;
    progressColor?: string;
    backgroundColor?:string;
    textColor?:string;
    corner?:boolean;
    shape?: string;
}

declare class RProgressDialog extends React.Component<RProgressDialogProps, any> {
    static defaultProps: {
        visible: boolean;
        onClose: () => void;
        tip: string;
        progressColor?: string;
        backgroundColor: string;
        textColor: string;
        corner: boolean;
        shape: string;
    };

    render(): JSX.Element;
}

export default RProgressDialog;