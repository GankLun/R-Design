/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface RTabBarItemProps{
    focused?: boolean;
    normalImage?: number;
    selectedImage?: number;
    badgeVisible?: boolean;
    badgeStyle?: StyleProp<ViewStyle>;
    badgeBackgroundColor?: string;
    badgeDot?: boolean;
    badgeText?: string;
    badgeSize?: number;
    badgeTextSize?: number;
    badgeTextColor?: string;
    overflowCount?: number;
    badgeTextStyle?: StyleProp<TextStyle>;
}

declare class RTabBarItem extends React.Component<RTabBarItemProps, any> {
    static defaultProps: {
        focused: boolean;
        normalImage: number;
        selectedImage: number;
        badgeVisible: boolean;
        badgeStyle: StyleProp<ViewStyle>;
        badgeBackgroundColor: string;
        badgeDot: boolean;
        badgeText: string;
        badgeSize: number;
        badgeTextSize: number;
        badgeTextColor: string;
        overflowCount: number;
        badgeTextStyle: StyleProp<TextStyle>;
    };

    render(): JSX.Element;
}

export default RTabBarItem;