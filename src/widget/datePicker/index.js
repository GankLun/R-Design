import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker,Toast ,List} from 'antd-mobile';

const nowTimeStamp = Date.now();
const curDate=new Date(nowTimeStamp);
const minDate=new Date((curDate.getFullYear()-20)+'-01'+'-02');
const maxDate=new Date((curDate.getFullYear()+21)+'-01'+'-01');
class RDatePicker extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    static defaultProps = {
        keyName:'',
        initialValue:'',
        rules:[],
        mode: 'date',
        label:'',
        extra:'请选择',
        minDate:minDate,
        maxDate:maxDate,
        minuteStep:1,
        onOk:()=>{},
        onDismiss:null,
        onChange:()=>{},
        onValueChange:()=>{},
        disabled:false,
        value:null,
        dismissText:'清空',
        okText:'确定',
        format:null,
        triggerComponent:undefined,
    };

    static propTypes = {
        keyName:PropTypes.string,
        initialValue:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]),
        rules:PropTypes.array,
        mode: PropTypes.oneOf(['date']),
        label:PropTypes.node,
        extra:PropTypes.node,
        minDate:PropTypes.instanceOf(Date),
        maxDate:PropTypes.instanceOf(Date),
        minuteStep:PropTypes.number,
        onOk:PropTypes.func,
        onDismiss:PropTypes.func,
        onChange:PropTypes.func,
        onValueChange:PropTypes.func,
        disabled:PropTypes.bool,
        value:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]),
        dismissText:PropTypes.node,
        okText:PropTypes.node,
        format:PropTypes.func,
        triggerComponent:PropTypes.instanceOf(List.Item),
    };

    render() {
        const {keyName,label,initialValue,rules,disabled,mode,value,minDate,maxDate,minuteStep,onChange,
            onValueChange,onOk,okText,onDismiss,dismissText,extra,triggerComponent,format}=this.props;
        const { getFieldProps,getFieldError  } = this.props.form?this.props.form:{};
        const fieldProps=this.props.form? {...getFieldProps(keyName?keyName:'',
            {
                initialValue: initialValue,
                rules: rules,
            })}:null;
        const formatWrapper=format?(date)=>{return format(date);}:null;
        return (
            <DatePicker 
                mode={mode}
                title={label} 
                disabled={disabled}
                extra={extra}
                value={value}
                minDate={minDate}
                maxDate={maxDate}
                minuteStep={minuteStep}
                format={formatWrapper}
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
                onChange={(val)=>{onChange(val);}}
                onValueChange={(val,index)=>{onValueChange(val,index);}}
                {...fieldProps}
                
            >
                { triggerComponent===undefined?(<List.Item arrow="horizontal">{label}</List.Item>):triggerComponent}
            </DatePicker>
        );
    }
}
export default RDatePicker;