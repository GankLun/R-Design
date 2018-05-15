import React, {Component} from 'react';
import {
    View,
    ViewPropTypes,
    Image,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';


export default class RSwitch extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        ...(ViewPropTypes || View.propTypes),
        checkedImage: PropTypes.element,
        unCheckedImage: PropTypes.element,
        onClick: PropTypes.func.isRequired,
        isChecked: PropTypes.bool,
        disabled: PropTypes.bool,
    }
    static defaultProps = {
        style:{},
        checkedImage:null,
        unCheckedImage:null,
        onClick:undefined,
        isChecked: false,
        disabled:false,
    }


    onClick=()=> {
        if(this.props.onClick){
            this.props.onClick();
        }
    }
        


    _renderImage=()=>{
        if (this.props.isChecked) {
            return this.props.checkedImage ? this.props.checkedImage : this.genCheckedImage();
        } else {
            return this.props.unCheckedImage ? this.props.unCheckedImage : this.genCheckedImage();
        }
    }

    genCheckedImage() {
        var source;

        source = this.props.isChecked ? require('./img/switch_on.png') : 
            require('./img/switch_off.png');    

        return (
            <Image source={source} />
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
    
                {this._renderImage()}
            </TouchableHighlight>
        );
    }
}

