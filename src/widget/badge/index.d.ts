/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface RBadgeProps{
    size?: number;
    text?: string|number;
    dot?: boolean;
    backgroundColor?:string;
    textColor?:string;
    textSize?:number;
    overflowCount?: number;
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}

declare class RBadge extends React.Component<RBadgeProps, any> {
    static defaultProps: {
        size: number; 
        text: string|number;
        dot: boolean;
        backgroundColor:string;
        textColor:string;
        textSize:number;
        overflowCount: number;
        textStyle: StyleProp<TextStyle>;
        style: StyleProp<ViewStyle>;
    };

    isInteger(params:object):boolean;

    render(): JSX.Element;
}

export default RBadge;