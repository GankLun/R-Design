import React from 'react';
import { Picker, List,Toast} from 'antd-mobile';
import PropTypes from 'prop-types';


class  RPicker extends React.Component {

    constructor(props){
        super(props);
    }

    static defaultProps = {
        keyName:'',
        initialValue:[''],
        rules:[],
        cols: 1,
        label:'',
        extra:'请选择',
        onOk:()=>{},
        onDismiss:null,
        onChange:()=>{},
        onPickerChange:()=>{},
        data:[],
        disabled:false,
        value:[],
        format:(labels) => { return labels.join(','); },
        dismissText:'清空',
        okText:'确定',
        itemStyle:{},
        indicatorStyle:{},
        cascade:true,
        triggerComponent:undefined,
    };

    static propTypes = {
        keyName:PropTypes.string,
        initialValue:PropTypes.array,
        rules:PropTypes.array,
        cols: PropTypes.number,
        label:PropTypes.node,
        extra:PropTypes.node,
        onOk:PropTypes.func,
        onDismiss:PropTypes.func,
        onChange:PropTypes.func,
        onPickerChange:PropTypes.func,
        data:PropTypes.array,
        disabled:PropTypes.bool,
        value:PropTypes.array,
        format:PropTypes.func,
        dismissText:PropTypes.node,
        okText:PropTypes.node,
        itemStyle:PropTypes.object,
        indicatorStyle:PropTypes.object,
        cascade:PropTypes.bool,
        triggerComponent:PropTypes.instanceOf(List.Item),
    };

    render() {
        const {
            keyName,initialValue, rules,cols,label,extra,onOk,onDismiss,onChange,
            onPickerChange,data,disabled,value,format,dismissText,okText,itemStyle,
            indicatorStyle,cascade,triggerComponent,form
        }=this.props;
        
        const {getFieldProps,getFieldError}=form?form:{};
        const fieldProps=form? {...getFieldProps(keyName?keyName:'',
            {
                initialValue: initialValue,
                rules: rules,
            })}:null;

        return (
            <Picker 
                title={label} 
                extra={extra} 
                disabled={disabled}
                dismissText={dismissText}
                onDismiss={!onDismiss?()=>{
                    if(this.props.form){
                        const obj={};
                        obj[keyName]='';
                        this.props.form.setFieldsValue(obj);
                        rules.forEach((item)=>{
                            if(item.required){
                                obj[keyName]={value:'',errors:[new Error(item.message)]};
                                this.props.form.setFields(obj);
                                Toast.fail(getFieldError(keyName)[0], 3, null, false);
                            }
                        });
                    }
                }:()=>{onDismiss();}}
                okText={okText}
                onOk={(val)=>{onOk(val);}}
                data={data}
                cols={cols} 
                value={value}    
                onChange={(val)=>{onChange(val);}}
                onPickerChange={(val)=>{onPickerChange(val);}}
                format={(labels)=>{ return format(labels);}}    
                itemStyle={itemStyle}    
                indicatorStyle={indicatorStyle}  
                cascade={cascade}
                {...fieldProps} 
            >

                { triggerComponent===undefined?(<List.Item arrow="horizontal">{label}</List.Item>):triggerComponent}
                
            </Picker>

        );
    }
}
export default RPicker;