import React, {PureComponent} from 'react';
import {FlatList,RefreshControl,View} from 'react-native';
import PropTypes from 'prop-types';

export default class RFlatList extends PureComponent {

    constructor(props) {
        super(props);
        this.page=1;
        this.state={fHeight:0};
    }

    
    static defaultProps = {
        style: {},
        columnWrapperStyle:{},
        refreshControl: false,
        refreshing: false,
        onRefresh:()=>{},
        progressColors:['#00bfff'],
        progressBackgroundColor:'#ffffff',
        progressViewOffset:0,
        footVisible:false,
        ListEmptyComponent:null,
        ListHeaderComponent:null,
        ListFooterComponent:null,
        ItemSeparatorComponent:null,
        dataSource:[],
        getItemLayout:()=>{},
        initialNumToRender:5,
        initialScrollIndex:0,
        keyExtractor:()=>{},
        numColumns:1,
        onEndReached:()=>{},
        renderItem:()=>{},
    };

    static propTypes = {
        style: PropTypes.object,
        columnWrapperStyle:PropTypes.object,
        refreshControl: PropTypes.bool,
        refreshing: PropTypes.bool,
        onRefresh:PropTypes.func,
        progressColors:PropTypes.array,
        progressBackgroundColor:PropTypes.string,
        progressViewOffset:PropTypes.number,
        footVisible:PropTypes.bool,
        ListEmptyComponent:PropTypes.element,
        ListHeaderComponent:PropTypes.element,
        ListFooterComponent:PropTypes.element,
        ItemSeparatorComponent:PropTypes.element,
        dataSource:PropTypes.array,
        getItemLayout:PropTypes.func,
        initialNumToRender:PropTypes.number,
        initialScrollIndex:PropTypes.number,
        keyExtractor:PropTypes.func,
        numColumns:PropTypes.number,
        onEndReached:PropTypes.func,
        renderItem:PropTypes.func,
    };

    render() {
        const columnWrapperStyle=this.props.numColumns>1?{columnWrapperStyle:this.props.columnWrapperStyle}:{};
        return (
            <FlatList 
                onLayout={(e) => { //获取FlatList高度
                    let height = e.nativeEvent.layout.height;
                    if (this.state.fHeight < height) {
                        this.setState({fHeight: height});
                    }           
                }}
                style={this.props.style}
                {...columnWrapperStyle}
                refreshControl={
                    this.props.refreshControl?
                        (<RefreshControl
                            refreshing={this.props.refreshing}
                            onRefresh={()=>{this.props.onRefresh();}}
                            colors={this.props.progressColors}
                            progressBackgroundColor={this.props.progressBackgroundColor}
                            progressViewOffset={this.props.progressViewOffset}
                        />):null
                }       
                ListEmptyComponent={()=>{
                    return ( // 解决ListEmptyComponent高度无法撑满FlatList的问题
                        <View style={{flex:1,height:this.state.fHeight}}>
                            {this.props.ListEmptyComponent}
                        </View>
                    );
    
                
                }}
                ListHeaderComponent={this.props.ListHeaderComponent}
                ListFooterComponent={
                    this.props.footVisible?
                        this.props.ListFooterComponent:null
                }
                ItemSeparatorComponent={()=>{return this.props.ItemSeparatorComponent;}}
                data={this.props.dataSource}
                getItemLayout={(data, index) => {return this.props.getItemLayout(data,index);}}
                horizontal={false}
                initialNumToRender={this.props.initialNumToRender}
                initialScrollIndex={this.props.initialScrollIndex}
                inverted={false}
                keyExtractor={(item,index)=>{return this.props.keyExtractor(item,index); } }             
                legacyImplementation={false}
                numColumns={this.props.numColumns<=0?1:this.props.numColumns}
                onEndReached={(info)=>{ //防止2次触发上拉加载更多事件
                    if(this.props.footVisible||!this.props.dataSource||this.props.dataSource.length<=0){
                        return;
                    }
                    this.props.onEndReached(info);
                }}
                onEndReachedThreshold={0.1}
                renderItem={({item,index})=>{
                    return this.props.renderItem({item,index}); }}
            />
           
        );
    }
}
