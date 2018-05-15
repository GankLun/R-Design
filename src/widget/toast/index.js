import {ToastAndroid,Platform} from 'react-native';
import { Toast} from 'antd-mobile';

class  RToast {

    /**
     * 
     * @param {提示内容:String} content 
     * @param {自动关闭的延时，单位秒: number} duration 
     * @param {位置：ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER，只对android Platform有效} gravity
     */
    static show(content,duration,gravity){
        if(Platform.OS==='android'){
            if(gravity){
                ToastAndroid.showWithGravity(content,duration,gravity);
            }else{
                ToastAndroid.show(content,duration);
            }
        }else if(Platform.OS==='ios'){
            RToast.info(content,duration,null,false);
        }
    }
    
    /**
     * 
     * @param {提示内容 :String 或 React.Element} content 
     * @param {自动关闭的延时，单位秒: number} duration 
     * @param {关闭回调函数:function} onClose 
     * @param {是否显示透明蒙层，防止触摸穿透:bool} mask 
     */
    static info(content, duration, onClose,mask){
        Toast.info(content, duration, onClose, mask);
    }
    
    /**
     * 
     * @param {提示内容 :String 或 React.Element} content 
     * @param {自动关闭的延时，单位秒: number} duration 
     * @param {关闭回调函数:function} onClose 
     * @param {是否显示透明蒙层，防止触摸穿透:bool} mask 
     */
    static success(content, duration, onClose,mask){
        Toast.success(content, duration, onClose, mask);
    }

    /**
     * 
     * @param {提示内容 :String 或 React.Element} content 
     * @param {自动关闭的延时，单位秒: number} duration 
     * @param {关闭回调函数:function} onClose 
     * @param {是否显示透明蒙层，防止触摸穿透:bool} mask 
     */
    static fail(content, duration, onClose,mask){
        Toast.fail(content, duration, onClose, mask);
    }

    /**
     * 
     * @param {提示内容 :String 或 React.Element} content 
     * @param {自动关闭的延时，单位秒: number} duration 
     * @param {关闭回调函数:function} onClose 
     * @param {是否显示透明蒙层，防止触摸穿透:bool} mask 
     */
    static loading(content, duration, onClose,mask){
        Toast.loading(content, duration, onClose, mask);
    }

    /**
     * 
     * @param {提示内容 :String 或 React.Element} content 
     * @param {自动关闭的延时，单位秒: number} duration 
     * @param {关闭回调函数:function} onClose 
     * @param {是否显示透明蒙层，防止触摸穿透:bool} mask 
     */
    static offline(content, duration, onClose,mask){
        Toast.offline(content, duration, onClose, mask);
    }

    static hide(){
        Toast.hide();
        
    }

}
export default RToast;