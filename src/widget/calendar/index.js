import React, {Component} from 'react';
import { Calendar,CalendarList,LocaleConfig } from 'react-native-calendars';
import PropTypes from 'prop-types';

LocaleConfig.locales['fr'] = {
    monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    dayNames: ['日','一','二','三','四','五','六'],
    dayNamesShort: ['日','一','二','三','四','五','六']
};
  
LocaleConfig.defaultLocale = 'fr';

export default class RCalendar extends Component {

    constructor(props) {
        super(props);
    }


    static defaultProps = {
        type:'panel',
        current:new Date(),    
        minDate:undefined,
        maxDate:undefined,
        onDayPress:()=>{},
        onDayLongPress:()=>{},
        onMonthChange:()=>{},
        hideArrows:false,
        renderArrow:undefined,
        hideExtraDays:false,
        disableMonthChange:false,
        firstDay:7,
        hideDayNames:false,
        showWeekNumbers:false,
        markedDates:{}, 
        /**<Calendar
           //Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2012-05-17': {marked: true},
          '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2012-05-19': {disabled: true, disableTouchEvent: true}
        }}
        />
        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
        const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
        const workout = {key:'workout', color: 'green'};
 
        <Calendar
              markedDates={{
               '2017-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
               '2017-10-26': {dots: [massage, workout], disabled: true},
  }},
                markingType={'multi-dot'/>
        <Calendar
            // Collection of dates that have to be colored in a special way. Default = {}
              markedDates={
               {'2012-05-20': {textColor: 'green'},
                '2012-05-22': {startingDay: true, color: 'green'},
                '2012-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                '2012-05-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
          }}
  // Date marking style [simple/period/multi-dot]. Default = 'simple'
             markingType={'period'}
           />
 */
        markingType:'simple',
        style:{},  
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: '#00adf5',
        monthTextColor: '#2d4150',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        onVisibleMonthsChange:()=>{},
        pastScrollRange:50,
        futureScrollRange:50,
        scrollEnabled:true,
        showScrollIndicator:false,
       
    };

    static propTypes = {
        type:PropTypes.oneOf(['panel','list']),
        current:PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(Date)]),    
        minDate:PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(Date)]),
        maxDate:PropTypes.oneOfType([PropTypes.string,PropTypes.instanceOf(Date)]),
        onDayPress:PropTypes.func,
        onDayLongPress:PropTypes.func,
        monthFormat:PropTypes.string,
        onMonthChange:PropTypes.func,
        hideArrows:PropTypes.bool,
        renderArrow:PropTypes.func,
        hideExtraDays:PropTypes.bool,
        disableMonthChange:PropTypes.bool,
        firstDay:PropTypes.oneOf([1,2,3,4,5,6,7]),
        hideDayNames:PropTypes.bool,
        showWeekNumbers:PropTypes.bool,
        markedDates:PropTypes.object,
        markingType:PropTypes.oneOf(['simple','period','multi-dot']),
        style:PropTypes.object,  
        calendarBackground: PropTypes.string,
        textSectionTitleColor: PropTypes.string,
        selectedDayBackgroundColor: PropTypes.string,
        selectedDayTextColor: PropTypes.string,
        todayTextColor: PropTypes.string,
        dayTextColor: PropTypes.string,
        textDisabledColor: PropTypes.string,
        dotColor: PropTypes.string,
        selectedDotColor: PropTypes.string,
        arrowColor: PropTypes.string,
        monthTextColor: PropTypes.string,
        textDayFontFamily: PropTypes.string,
        textMonthFontFamily: PropTypes.string,
        textDayHeaderFontFamily: PropTypes.string,
        textDayFontSize: PropTypes.number,
        textMonthFontSize: PropTypes.number,
        textDayHeaderFontSize: PropTypes.number,
        onVisibleMonthsChange:PropTypes.func,
        pastScrollRange:PropTypes.number,
        futureScrollRange:PropTypes.number,
        scrollEnabled:PropTypes.bool,
        showScrollIndicator:PropTypes.bool,
    };



    render() {
        return this.props.type==='panel'?(
            <Calendar
                current={this.props.current}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                onDayPress={(date) => {this.props.onDayPress(date);}}
                onDayLongPress={(date) => {this.props.onDayLongPress(date);}}
                monthFormat={this.props.monthFormat}
                onMonthChange={(date) => {this.props.onMonthChange(date);}}
                hideArrows={this.props.hideArrows}
                renderArrow={this.props.renderArrow?(direction) => {return this.props.renderArrow(direction);}
                    :undefined}
                hideExtraDays={this.props.hideExtraDays}
                disableMonthChange={this.props.disableMonthChange}
                firstDay={this.props.firstDay}
                hideDayNames={this.props.hideDayNames}
                showWeekNumbers={this.props.showWeekNumbers}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                markedDates={this.props.markedDates}
                markingType={this.props.markingType}
                style={this.props.style}
                theme={{
                    calendarBackground: this.props.calendarBackground,
                    textSectionTitleColor:  this.props.textSectionTitleColor,
                    selectedDayBackgroundColor: this.props.selectedDayBackgroundColor,
                    selectedDayTextColor: this.props.selectedDayTextColor,
                    todayTextColor: this.props.todayTextColor,
                    dayTextColor: this.props.dayTextColor,
                    textDisabledColor: this.props.textDisabledColor,
                    dotColor: this.props.dotColor,
                    selectedDotColor: this.props.selectedDotColor,
                    arrowColor: this.props.arrowColor,
                    monthTextColor: this.props.monthTextColor,
                    textDayFontFamily: this.props.textDayFontFamily,
                    textMonthFontFamily: this.props.textMonthFontFamily,
                    textDayHeaderFontFamily: this.props.textDayHeaderFontFamily,
                    textDayFontSize: this.props.textDayFontSize,
                    textMonthFontSize: this.props.textMonthFontSize,
                    textDayHeaderFontSize: this.props.textDayHeaderFontSize
                }}
            >
            </Calendar>
        ):(
            <CalendarList
                current={this.props.current}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                onDayPress={(date) => {this.props.onDayPress(date);}}
                onDayLongPress={(date) => {this.props.onDayLongPress(date);}}
                monthFormat={this.props.monthFormat}
                onMonthChange={(date) => {this.props.onMonthChange(date);}}
                hideArrows={this.props.hideArrows}
                renderArrow={this.props.renderArrow?(direction) => {return this.props.renderArrow(direction);}
                    :undefined}
                hideExtraDays={this.props.hideExtraDays}
                disableMonthChange={this.props.disableMonthChange}
                firstDay={this.props.firstDay}
                hideDayNames={this.props.hideDayNames}
                showWeekNumbers={this.props.showWeekNumbers}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                markedDates={this.props.markedDates}
                markingType={this.props.markingType}
                style={this.props.style}
                theme={{
                    calendarBackground: this.props.calendarBackground,
                    textSectionTitleColor:  this.props.textSectionTitleColor,
                    selectedDayBackgroundColor: this.props.selectedDayBackgroundColor,
                    selectedDayTextColor: this.props.selectedDayTextColor,
                    todayTextColor: this.props.todayTextColor,
                    dayTextColor: this.props.dayTextColor,
                    textDisabledColor: this.props.textDisabledColor,
                    dotColor: this.props.dotColor,
                    selectedDotColor: this.props.selectedDotColor,
                    arrowColor: this.props.arrowColor,
                    monthTextColor: this.props.monthTextColor,
                    textDayFontFamily: this.props.textDayFontFamily,
                    textMonthFontFamily: this.props.textMonthFontFamily,
                    textDayHeaderFontFamily: this.props.textDayHeaderFontFamily,
                    textDayFontSize: this.props.textDayFontSize,
                    textMonthFontSize: this.props.textMonthFontSize,
                    textDayHeaderFontSize: this.props.textDayHeaderFontSize
                }}
                onVisibleMonthsChange={(months) => {this.props.onVisibleMonthsChange(months);}}
                pastScrollRange={this.props.pastScrollRange}
                futureScrollRange={this.props.futureScrollRange}
                scrollEnabled={this.props.scrollEnabled}
                showScrollIndicator={this.props.showScrollIndicator}
            >
            </CalendarList>
        );
        
    
    }  
    
}
