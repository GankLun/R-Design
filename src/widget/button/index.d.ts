/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface RButtonProps{
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    textValue?: string;
    activeOpacity?:number;
    underlayColor?:string;
    disabled?:boolean;
    onPress?: () => void;
    onLongPress?: () => void;
}

declare class RButton extends React.Component<RButtonProps, any> {
    static defaultProps: {
        style: StyleProp<ViewStyle>;
        textStyle: StyleProp<TextStyle>;
        textValue: string;
        activeOpacity:number;
        underlayColor:string;
        disabled:boolean;
        onPress: () => void;
        onLongPress: () => void;
    };

    render(): JSX.Element;
}

export default RButton;