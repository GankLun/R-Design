import React, { Component } from 'react';
import {TouchableOpacity,View,Text,TextInput,Image} from 'react-native';
import PropTypes from 'prop-types';

export default class RTextInput extends Component {

    constructor(props) {
        super(props);
        this.state={clearImageVisible:false};
       
    }
    static defaultProps = {
        style:{},
        textStyle: {},
        autoFocus:false,
        blurOnSubmit:NaN,
        caretHidden:false,
        defaultValue:'',
        editable:true,
        keyboardType:'default',
        maxLength:10000,
        multiline:false,
        onBlur:()=>{},
        onChange:()=>{},
        onChangeText:()=>{},
        onEndEditing:()=>{},
        onFocus:()=>{},
        onLayout:()=>{},
        onScroll:()=>{},
        onSelectionChange:()=>{},
        onSubmitEditing:()=>{},
        placeholder:'',
        placeholderTextColor:null,
        returnKeyType:'done',
        secureTextEntry:false,
        selectionColor:null,
        value:'',
        clearImage:NaN,
        onClear:()=>{},
        dataDetectorTypes:'none',
        keyboardAppearance:'default',
        onKeyPress:()=>{}
    };

    static propTypes = {
        style:View.propTypes.style,
        textStyle: Text.propTypes.style,
        autoFocus:PropTypes.bool,
        blurOnSubmit:PropTypes.oneOfType([PropTypes.bool,NaN]),
        caretHidden:PropTypes.bool,
        defaultValue:PropTypes.string,
        editable:PropTypes.bool,
        keyboardType:PropTypes.oneOf(['default','numeric','email-address','phone-pad']),
        maxLength:PropTypes.number,
        multiline:PropTypes.bool,
        onBlur:PropTypes.func,
        onChange:PropTypes.func,
        onChangeText:PropTypes.func.isRequired,
        onEndEditing:PropTypes.func,
        onFocus:PropTypes.func,
        onLayout:PropTypes.func,
        onScroll:PropTypes.func,
        onSelectionChange:PropTypes.func,
        onSubmitEditing:PropTypes.func,
        placeholder:PropTypes.string,
        placeholderTextColor:PropTypes.string,
        returnKeyType:PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 
            'default', 'emergency-call', 'google', 'join', 'route', 'yahoo']),
        secureTextEntry:PropTypes.bool,
        selectionColor:PropTypes.string,
        value:PropTypes.string.isRequired,
        clearImage:PropTypes.number,
        onClear:PropTypes.func.isRequired,
        dataDetectorTypes: PropTypes.oneOf(['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all']),
        keyboardAppearance:PropTypes.oneOf(['default', 'light', 'dark']),
        onKeyPress:PropTypes.func
    };

    isFocused=()=>{
        return this.input.isFocused();
    }

    render() {
        const style=this.props.style;
        const textStyle=this.props.textStyle;
        const placeholderTextColor=this.props.placeholderTextColor?
            {placeholderTextColor:this.props.placeholderTextColor}:null;
        const selectionColor=this.props.selectionColor?
            {selectionColor:this.props.selectionColor}:null;
        return (
            <View style={[{width:200,height:40,flexDirection:'row',alignItems:'center',paddingRight:5,
                borderBottomWidth:1,borderColor:'#00adf5',},style]}>
                <TextInput 
                    ref={(input)=>{this.input=input;}}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    autoFocus={this.props.autoFocus}
                    blurOnSubmit={isNaN(this.props.blurOnSubmit)?(this.props.multiline?false:true)
                        :this.props.blurOnSubmit}
                    caretHidden={this.props.caretHidden}
                    defaultValue={this.props.defaultValue} 
                    editable={this.props.editable}
                    keyboardType={this.props.keyboardType}
                    maxLength={this.props.maxLength}
                    multiline ={this.props.multiline}
                    onBlur={()=>{this.props.onBlur();}}
                    onChange={()=>{this.props.onChange();}}
                    onChangeText={(text)=>{
                        if(text.length>0){
                            this.setState({clearImageVisible:true});
                        }else{
                            this.setState({clearImageVisible:false});
                        }
                        this.props.onChangeText(text);}}
                    onEndEditing={()=>{this.props.onEndEditing();}} 
                    onFocus ={()=>{this.props.onFocus();}}
                    onLayout={(x,y,width,height)=>{this.props.onLayout(x,y,width,height);}}
                    onScroll={(e)=>{this.props.onScroll(e);}} 
                    onSelectionChange={(e)=>{this.props.onSelectionChange(e);}} 
                    onSubmitEditing={()=>{this.props.onSubmitEditing();}}
                    placeholder={this.props.placeholder}
                    {...placeholderTextColor}
                    returnKeyType={this.props.returnKeyType} 
                    secureTextEntry={this.props.secureTextEntry}
                    {...selectionColor}
                    selectTextOnFocus={false} 
                    style={[{flex:1},textStyle]}
                    value={this.props.value}
                    clearButtonMode ={'never'}
                    clearTextOnFocus ={false}
                    enablesReturnKeyAutomatically ={false}
                    dataDetectorTypes ={this.props.dataDetectorTypes}
                    keyboardAppearance={this.props.keyboardAppearance}
                    onKeyPress={(e)=>{this.props.onKeyPress(e);}}
                    spellCheck ={false}>          
                </TextInput>
                {this.state.clearImageVisible?(
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                        this.setState({clearImageVisible:false});
                        this.props.onClear();
                    }}>                     
                        <Image source={isNaN(this.props.clearImage)?require('./img/clear.png'):
                            this.props.clearImage} />
                    </TouchableOpacity>)
                    :null}
            </View>
        );
       
    }
}
