import React, {Component} from 'react';
import {View,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class RBadge extends Component {

    constructor(props) {
        super(props);
    }


    static defaultProps = {
        size:10, //只当dot为true时生效
        text: '',
        dot:false,
        backgroundColor:'#ff0000',
        textColor:'#ffffff',
        textSize:12,
        overflowCount:99,
        textStyle:{},
        style:{},
    };

    static propTypes = {
        size:PropTypes.number,
        text: PropTypes.oneOfType([PropTypes.string,PropTypes.number,]),
        dot:PropTypes.bool,
        backgroundColor:PropTypes.string,
        textColor:PropTypes.string,
        textSize:PropTypes.number,
        overflowCount:PropTypes.number,
        textStyle:Text.propTypes.style,
        style:View.propTypes.style
    };

    isInteger=(obj)=> {
        return typeof obj === 'number' && obj%1 === 0;
    }

    render() {
        const {size,text,dot,overflowCount,backgroundColor,textColor,textSize,textStyle,style}=this.props; 
        
        if(dot){
            return (
                <View style={[style,{width:size,height:size,backgroundColor:backgroundColor,
                    borderRadius:50}]}>           
                </View>
            );
        }else{
            if(this.isInteger(text)){
                if(text<=0){
                    return;
                }else{
                    return (<View style={[style,{backgroundColor:backgroundColor,
                        borderRadius:text<10?50:10,alignItems:'center',justifyContent:'center',padding:2}]}>  
                        <Text style={[textStyle,{color:textColor,fontSize:textSize}]}>
                            {text<=overflowCount?text:overflowCount+'+'}
                        </Text>
                    </View>); 
                }
            }else{
                return (<View style={[style,{backgroundColor:backgroundColor,
                    borderRadius:10,alignItems:'center',justifyContent:'center',padding:2},]}>  
                    <Text style={[textStyle,{color:textColor,fontSize:textSize}]}>
                        {text<=overflowCount?text:overflowCount+'+'}
                    </Text>
                </View>); 
            }
        }
    }  
    
}
