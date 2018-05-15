import React, { Component } from 'react';
import {Platform,View,Text,TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import PropTypes from 'prop-types';

export default class RButton extends Component {

    constructor(props) {
        super(props);
       
    }
    static defaultProps = {
        style: {},
        textStyle:{},
        textValue:'',
        activeOpacity:1.0,
        underlayColor :'#00000000',
        disabled:false,
        onPress:()=>{},
        onLongPress:()=>{}, 
    };

    static propTypes = {
        style: View.propTypes.style,
        textStyle:Text.propTypes.style,
        textValue:PropTypes.string,
        activeOpacity:PropTypes.number,
        underlayColor:PropTypes.string,
        disabled:PropTypes.bool,
        onPress:PropTypes.func,
        onLongPress:PropTypes.func,
    };

    render() {
        if(Platform.OS === 'android' && Platform.Version >= 21){
            return (
                <TouchableNativeFeedback 
                    disabled={this.props.disabled}
                    background={TouchableNativeFeedback.Ripple(this.props.underlayColor, false)}
                    onPress={()=>{this.props.onPress();}}
                    onLongPress={()=>{this.props.onLongPress();}}>
                    <View style={[this.props.style, 
                        {justifyContent:'center',alignItems:'center',}]}>
                        <Text style={this.props.textStyle}>{this.props.textValue}</Text>
                    </View>
                </TouchableNativeFeedback>
            );
        }else{
            return( <TouchableOpacity 
                style={[this.props.style, 
                    {justifyContent:'center',alignItems:'center',}]}
                disabled={this.props.disabled}
                activeOpacity={this.props.activeOpacity}
                onPress={()=>{this.props.onPress();}}
                onLongPress={()=>{this.props.onLongPress();}}>
                <View>
                    <Text style={this.props.textStyle}>{this.props.textValue}</Text>
                </View>
            </TouchableOpacity>
            );
        }
       
    }
}
