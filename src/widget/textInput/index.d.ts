/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface RTextInputProps{
    style?: StyleProp<ViewStyle>;
    textStyle?:StyleProp<TextStyle>;
    autoFocus?: boolean;
    blurOnSubmit?:boolean;
    caretHidden?:boolean;
    defaultValue?:string;
    editable?: boolean;
    keyboardType?: string;
    maxLength?:number;
    multiline?:boolean;
    onBlur?:(_?: any) => void;
    onChange?:(_?: any) => void;
    onChangeText?:(_?: any) => void;
    onEndEditing?:(_?: any) => void;
    onFocus?:(_?: any) => void;
    onLayout?:(_?: any) => void;
    onScroll?:(_?: any) => void;
    onSelectionChange?:(_?: any) => void;
    onSubmitEditing?:(_?: any) => void;
    placeholder?:string;
    placeholderTextColor?:string;
    returnKeyType?:string;
    secureTextEntry?:boolean;
    selectionColor?:string;
    value:string;
    /**android only */
    disableFullscreenUI?:boolean;
    /**android only */
    inlineImageLeft?:string;
    /**android only */
    inlineImagePadding?:number;
    /**android only */
    returnKeyLabel?:string;
    /**android only */
    textBreakStrategy?:string;
    /**android only */
    numberOfLines?:number;
    clearImage?:number;
    onClear:(_?: any) => void;
    selectionColor?:string;
    /**ios only */
    dataDetectorTypes?:string;
    /**ios only */
    keyboardAppearance?:string;
    /**ios only */
    onKeyPress?:(_?: any) => void;
}

declare class RTextInput extends React.Component<RTextInputProps, any> {
    static defaultProps: {
        style?: StyleProp<ViewStyle>;
        textStyle:StyleProp<TextStyle>;
        autoFocus: boolean;
        blurOnSubmit:boolean;
        caretHidden:boolean;
        defaultValue:string;
        editable: boolean;
        keyboardType: string;
        maxLength: number;
        multiline:boolean;
        onBlur:(_?: any) => void;
        onChange:(_?: any) => void;
        onChangeText:(_?: any) => void;
        onEndEditing:(_?: any) => void;
        onFocus:(_?: any) => void;
        onLayout:(_?: any) => void;
        onScroll:(_?: any) => void;
        onSelectionChange:(_?: any) => void;
        onSubmitEditing:(_?: any) => void;
        placeholder:string;
        placeholderTextColor:string;
        returnKeyType:string;
        secureTextEntry:boolean;
        selectionColor:string;
        value:string;
        disableFullscreenUI:boolean;
        inlineImageLeft:string;
        inlineImagePadding:number;
        returnKeyLabel:string;
        textBreakStrategy:string;
        numberOfLines:number;
        clearImage:number;
        onClear:(_?: any) => void;
        dataDetectorTypes:string;
        keyboardAppearance:string;
        onKeyPress:(_?: any) => void;
    };

    isFocused():boolean;

    render(): JSX.Element;
}

export default RTextInput;