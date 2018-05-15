/// <reference types="react" />
import React from 'react';

export interface RFlatListProps{
    style?: object;
    columnWrapperStyle?:object;
    refreshControl?: boolean;
    refreshing?: boolean;
    onRefresh?:() => void;
    progressColors?:Array;
    progressBackgroundColor?:string;
    progressViewOffset?:number;
    footVisible?:boolean;
    ListEmptyComponent?:JSX.Element;
    ListHeaderComponent?:JSX.Element;
    ListFooterComponent?:JSX.Element;
    ItemSeparatorComponent?:JSX.Element;
    dataSource?:Array;
    
    getItemLayout?:(data: any, index: number) => any;
    initialNumToRender?:number;
    initialScrollIndex?:number;
    keyExtractor?:(item:any,index:number) => any;
    numColumns?:number;
    onEndReached?:(_?:any) => void;
    renderItem?:(item: any, index: number) => JSX.Element;
}

declare class RFlatList extends React.Component<RFlatListProps, any> {
    static defaultProps: {
    style: object;
    columnWrapperStyle:object;
    refreshControl: boolean;
    refreshing: boolean;
    onRefresh:() => void;
    progressColors:Array;
    progressBackgroundColor:string;
    progressViewOffset:number;
    footVisible:boolean;
    ListEmptyComponent:JSX.Element;
    ListHeaderComponent:JSX.Element;
    ListFooterComponent:JSX.Element;
    ItemSeparatorComponent:JSX.Element;
    dataSource:Array;
    getItemLayout:(data: any, index: number) => any;
    initialNumToRender:number;
    initialScrollIndex:number;
    keyExtractor:(item:any,index:number) => any;
    numColumns:number;
    onEndReached:(_?:any) => void;
    renderItem:(item: any, index: number) => JSX.Element;
    };

    render(): JSX.Element;
}

export default RFlatList;