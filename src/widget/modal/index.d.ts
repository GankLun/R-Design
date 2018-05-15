/// <reference types="react" />
import React from 'react';
import { StyleProp,ViewStyle,TextStyle } from 'react-native';

export interface RModalProps{
    visible?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    onClose?:() => void;
    transparent?:boolean;
    popup?:boolean;
    animationType?:string;
    title?:string | JSX.Element;
    footer?:Array;
    style?:StyleProp<ViewStyle>;
    
}

export interface Action {
    text: string;
    onPress?: () => void | Promise<any>;
    style?: StyleProp<ViewStyle> | StyleProp<TextStyle> | string;
}

export declare type Callback = (valueOrLogin: string, password?: string) => void;
export declare type CallbackOrActions = Callback | Action[];

declare class RModal extends React.Component<RModalProps, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        onClose:() => void;
        transparent:boolean;
        popup:boolean;
        animationType:string;
        title:string | JSX.Element;
        footer:Array;
        style?:StyleProp<ViewStyle>;
    };

    static alert: (title: JSX.Element, message: JSX.Element, actions?: Action[], platform?: string) => {
    };
    static prompt: (title: JSX.Element, message: JSX.Element, callbackOrActions: CallbackOrActions, type?: 'default' | 'secure-text' | 'login-password', defaultValue?: string, placeholders?: string[], platform?: string) => {
    };
    static operation: (actions?: Action[], platform?: string) => {
    };
    render(): JSX.Element;
}

export default RModal;