/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface RSwitchProps{
    style?: StyleProp<ViewStyle>;
    checkedImage?: JSX.Element;
    unCheckedImage?: JSX.Element;
    onClick: () => void;
    isChecked?: boolean;
    disabled?: boolean;
}

declare class RSwitch extends React.Component<RSwitchProps, any> {
    static defaultProps: {
        style: StyleProp<ViewStyle>;
        checkedImage: JSX.Element;
        unCheckedImage: JSX.Element;
        onClick: () => void;
        isChecked: boolean;
        disabled: boolean;
    };

    render(): JSX.Element;
}

export default RSwitch;