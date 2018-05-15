/// <reference types="react" />
import React from 'react';

export interface RCalendarProps{
    type?:string;
    current?:string | Date;    
    minDate?:string | Date;    
    maxDate?:string | Date;    
    onDayPress?:() => void;
    onDayLongPress?:() => void;
    monthFormat?:string;
    onMonthChange?:(_?:any) => void;
    hideArrows?:boolean;
    renderArrow?:(_?:any) => JSX.Element;
    hideExtraDays?:boolean;
    disableMonthChange?:boolean;
    firstDay?:number;
    hideDayNames?:boolean;
    showWeekNumbers?:boolean;
    markedDates?:any;
    markingType?:string;
    style?:object;
    calendarBackground?: string;
    textSectionTitleColor?: string;
    selectedDayBackgroundColor?: string;
    selectedDayTextColor?: string;
    todayTextColor?: string;
    dayTextColor?: string;
    textDisabledColor?: string;
    dotColor?: string;
    selectedDotColor?: string;
    arrowColor?: string;
    monthTextColor?: string;
    textDayFontFamily?: string;
    textMonthFontFamily?: string;
    textDayHeaderFontFamily?: string;
    textDayFontSize?: number;
    textMonthFontSize?: number;
    textDayHeaderFontSize?: number;
    onVisibleMonthsChange?:(_?:any) => void;
    pastScrollRange?:number;
    futureScrollRange?:number;
    scrollEnabled?:boolean;
    showScrollIndicator?:boolean;
}

declare class RCalendar extends React.Component<RCalendarProps, any> {
    type:string;
    current:string | Date;    
    minDate:string | Date;    
    maxDate:string | Date;    
    onDayPress:() => void;
    onDayLongPress:() => void;
    monthFormat:string;
    onMonthChange:(_?:any) => void;
    hideArrows:boolean;
    renderArrow:(_?:any) => JSX.Element;
    hideExtraDays:boolean;
    disableMonthChange:boolean;
    firstDay:number;
    hideDayNames:boolean;
    showWeekNumbers:boolean;
    markedDates:any;
    markingType:string;
    style:object;
    calendarBackground: string;
    textSectionTitleColor: string;
    selectedDayBackgroundColor: string;
    selectedDayTextColor: string;
    todayTextColor: string;
    dayTextColor: string;
    textDisabledColor: string;
    dotColor: string;
    selectedDotColor: string;
    arrowColor: string;
    monthTextColor: string;
    textDayFontFamily: string;
    textMonthFontFamily: string;
    textDayHeaderFontFamily: string;
    textDayFontSize: number;
    textMonthFontSize: number;
    textDayHeaderFontSize: number;
    onVisibleMonthsChange:(_?:any) => void;
    pastScrollRange:number;
    futureScrollRange:number;
    scrollEnabled:boolean;
    showScrollIndicator:boolean;
    
    render(): JSX.Element;
}

export default RCalendar;