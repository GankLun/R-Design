import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ViewPropTypes,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';


export default class RCheckBox extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        ...(ViewPropTypes || View.propTypes),
        leftText: PropTypes.string,
        leftTextView: PropTypes.element,
        rightText: PropTypes.string,
        leftTextStyle: Text.propTypes.style,
        rightTextView: PropTypes.element,
        rightTextStyle: Text.propTypes.style,
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool,
        checkBoxColor: PropTypes.string,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        style:{},
        leftText:null,
        leftTextView:null,
        rightText:null,
        rightTextView:null,
        checkedImage:null,
        unCheckedImage:null,
        onClick:undefined,
        isChecked: false,
        leftTextStyle: {},
        rightTextStyle: {},
        checkBoxColor:undefined,
        disabled:false
    }


    onClick=()=> {
        if(this.props.onClick){
            this.props.onClick();
        }
    }
        
    _renderLeft=()=> {
        if (this.props.leftTextView)return this.props.leftTextView;
        if (!this.props.leftText)return null;
        return (
            <Text style={[styles.leftText, this.props.leftTextStyle]}>{this.props.leftText}</Text>
        );
    }
    _renderRight=()=> {
        if (this.props.rightTextView)return this.props.rightTextView;
        if (!this.props.rightText)return null;
        return (
            <Text style={[styles.rightText, this.props.rightTextStyle]}>{this.props.rightText}</Text>
        );
    }

    _renderImage=()=>{
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    genCheckedImage() {
        
        const source = this.props.isChecked ? require('./img/ic_check_box.png') : 
            require('./img/ic_check_box_outline_blank.png');
        

        return (
            <Image source={source} style={{tintColor: this.props.checkBoxColor}} />
        );
    }

    render() {
        return (
            <TouchableHighlight
                style={this.props.style}
                onPress={()=>this.onClick()}
                underlayColor='transparent'
                disabled={this.props.disabled}
            >
                <View style={styles.container}>
                    {this._renderLeft()}
                    {this._renderImage()}
                    {this._renderRight()}
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        flex: 1,
    },
    rightText: {
        flex: 1,
        marginLeft: 10
    }
});
