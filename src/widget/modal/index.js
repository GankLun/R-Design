import React from 'react';
import { Modal} from 'antd-mobile';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';


class  RModal extends React.Component {

     static RHandle;

     constructor(props){
         super(props);
     }

    static defaultProps = {
        visible:false,
        closable:false,
        maskClosable:true,
        onClose:()=>{},
        transparent:false,
        popup:false,
        animationType:'fade',
        title:'',
        footer:[],
        style:{},
    };
    
    static propTypes = {
        visible:PropTypes.bool,
        closable:PropTypes.bool,
        maskClosable:PropTypes.bool,
        onClose: PropTypes.func,
        transparent:PropTypes.bool,
        popup:PropTypes.bool,
        animationType:PropTypes.oneOf(['slide-down','slide-up','fade','slide']),
        title:PropTypes.node,
        footer:PropTypes.array,
        style:PropTypes.object,
    };
    
    /**
     * 
     * @param {标题 :String 或 React.Element} title 
     * @param {内容: String 或 React.Element} message 
     * @param {按钮组, {text, onPress, style}:Array} actions 
     */
    static alert(title, message, actions){
        RModal.RHandle=Modal.alert(title, message, actions,Platform.OS);
    }
    
    /**
     * 
     * @param {标题 :String 或 React.Element} title 
     * @param {内容 :String 或 React.Element} message 
     * @param {按钮组 {text, onPress}:Array 或回调函数:Function} callbackOrActions 
     * @param {prompt 的样式：String ('default', 'secure-text', 'login-password')} type 
     * @param { 默认值(input 为 password 类型不支持)：String} defaultValue 
     * @param {默认提示： String[]} placeholders 
     */
    static prompt(title, message, callbackOrActions, type, defaultValue, placeholders){
        RModal.RHandle=Modal.prompt(title, message, callbackOrActions, type, defaultValue, placeholders,Platform.OS);
    }

    /**
     * 
     * @param {按钮组, {text, onPress, style}:Array} actions 
     */
    static operation(actions){
        RModal.RHandle=Modal.operation(actions,Platform.OS);
    }

    static close(){
        if(RModal.RHandle){
            RModal.RHandle.close();
            RModal.RHandle=null;
        }
        
    }

    render() {
        const { visible,closable, maskClosable,onClose,transparent,popup,
            animationType,title,footer,style}=this.props;
        


        return (
            <Modal 
                visible={visible} 
                closable={closable} 
                maskClosable={maskClosable}
                onClose={()=>onClose()}
                transparent={transparent}
                popup={popup}
                animationType={animationType}
                title={title} 
                footer={footer}
                platform ={Platform.OS}   
                style={style}
            >
                {this.props.children}
            </Modal>

        );
    }
}
export default RModal;