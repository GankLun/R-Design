import React, {Component} from 'react';
import {Image,View,Text} from 'react-native';
import RBadge from './../badge';
import PropTypes from 'prop-types';

/**
 * 该组件配合DrawerNavigation和TabNavigation
 */
export default class RTabBarItem extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        focused: false,
        normalImage: NaN,
        selectedImage: NaN,
        badgeVisible:false,
        badgeStyle:{},
        badgeBackgroundColor:'#ff0000',
        badgeDot:false,
        badgeText:'',
        badgeSize:10,
        badgeTextSize:12,
        badgeTextColor:'#ffffff',
        overflowCount:99,
        badgeTextStyle:{},
    };

    static propTypes = {
        focused: PropTypes.bool,
        normalImage: PropTypes.number,
        selectedImage: PropTypes.number,
        badgeVisible:PropTypes.bool,
        badgeStyle:View.propTypes.style,
        badgeBackgroundColor:PropTypes.string,
        badgeDot:PropTypes.bool,
        badgeText:PropTypes.oneOfType([PropTypes.string,PropTypes.number,]),
        badgeSize:PropTypes.number,
        badgeTextSize:PropTypes.number,
        badgeTextColor:PropTypes.string,
        overflowCount:PropTypes.number,
        badgeTextStyle:Text.propTypes.style,
    };

    render() {
        return (
            <View>
                { this.props.badgeVisible?
                    (<RBadge style={this.props.badgeStyle}
                        backgroundColor={this.props.badgeBackgroundColor}
                        dot={this.props.badgeDot}
                        text={this.props.badgeText}
                        size={this.props.badgeSize}
                        textSize={this.props.badgeTextSize}
                        textColor={this.props.badgeTextColor}
                        overflowCount={this.props.overflowCount}
                        textStyle={this.props.badgeTextStyle}
                    >
                    </RBadge>):null
                }
                <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                    style={ {width: 28, height: 28,} }
                />
            </View>
          
        );
    }
}
