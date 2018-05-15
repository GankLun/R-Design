import React from 'react';
import PropTypes from 'prop-types';
import {Platform,View,Text,Modal, ActivityIndicator,StyleSheet,Dimensions} from 'react-native';


class  RProgressDialog extends React.Component {
   
    constructor(props){
        super(props);
    }

    static defaultProps = {
        visible:false,
        onClose:()=>{},
        tip:'加载中...',
        progressColor:'#00adf5',
        textColor:'#ffffff',
        backgroundColor:'#000000bc',
        corner:false,
        shape:'rect'
    };
    
    static propTypes = {
        visible:PropTypes.bool,
        onClose: Platform.OS === 'android' ? PropTypes.func.isRequired : PropTypes.func,
        tip:PropTypes.string,
        progressColor:PropTypes.string,
        textColor:PropTypes.string,
        backgroundColor:PropTypes.string,
        corner:PropTypes.bool,
        shape:PropTypes.oneOf(['rect','square'])
    };
    


    render() {
        const {height, width} = Dimensions.get('window');

        const pWidth=width>height?height*0.7:width*0.7;

        const { visible, onClose,tip,backgroundColor,progressColor,textColor,corner,shape}=this.props;
            
        const rectTextStyles = StyleSheet.create({
            text: {
                marginLeft:20,
                fontSize:14,
                color:textColor,
                fontWeight:'bold',
                textAlignVertical:'center',
                ...Platform.select({
                    ios: {
                    },
                    android: {
                        includeFontPadding: false,
                    },
                }),
            },
        });

        const squareTextStyles = StyleSheet.create({
            text: {
                marginTop:10,
                fontSize:14,
                color:textColor,
                fontWeight:'bold',
                textAlign:'center',
            },
        });

        const component =shape==='rect'?
            (<View style={{flex:0,flexDirection:'row',alignItems:'center',maxWidth:pWidth,
                paddingHorizontal:20,paddingVertical:20,backgroundColor:backgroundColor,
                borderRadius:corner?5:0}}>
                <ActivityIndicator
                    animating={true}
                    size={'large'}
                    color ={progressColor}
                >
                </ActivityIndicator>
                <Text 
                    numberOfLines={2}
                    style={rectTextStyles.text}>
                    {tip}
                </Text>
            </View>):
            (<View style={{width:100,height:100,flexDirection:'column',alignItems:'center',
                justifyContent:'center',backgroundColor:backgroundColor,borderRadius:corner?5:0}}>
                <ActivityIndicator
                    animating={true}
                    size={'large'}
                    color ={progressColor}
                >
                </ActivityIndicator>
                <Text 
                    numberOfLines={1}
                    style={squareTextStyles.text}>
                    {tip}
                </Text>
            </View>);
        return (
            <Modal 
                visible={visible} 
                onRequestClose ={()=>onClose()}
                animationType={'fade'}
                transparent={true}
            >
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    {component}
                </View>
            </Modal>

        );
    }
}



export default RProgressDialog;