/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface RCheckBoxProps{
    style?: StyleProp<ViewStyle>;
    leftText?: string;
    leftTextView?: JSX.Element;
    rightText?: string;
    rightTextView?: JSX.Element; 
    leftTextStyle?: StyleProp<TextStyle>;
    rightTextStyle?: StyleProp<TextStyle>;
    checkedImage?: JSX.Element;
    unCheckedImage?: JSX.Element;
    onClick: () => void;
    isChecked?: boolean;
    disabled?: boolean;
    checkBoxColor?: string;
}

declare class RCheckBox extends React.Component<RCheckBoxProps, any> {
    static defaultProps: {
        style: StyleProp<ViewStyle>;
        leftText: string;
        leftTextView: JSX.Element;
        rightText: string;
        rightTextView: JSX.Element; 
        leftTextStyle: StyleProp<TextStyle>;
        rightTextStyle: StyleProp<TextStyle>;
        checkedImage: JSX.Element;
        unCheckedImage: JSX.Element;
        onClick: () => void;
        isChecked: boolean;
        disabled: boolean;
        checkBoxColor: string;
    };

    render(): JSX.Element;
}

export default RCheckBox;