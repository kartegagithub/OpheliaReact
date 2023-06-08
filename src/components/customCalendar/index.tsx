import moment from 'moment';
import * as React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {langData} from './tr';

const CustomCalendar = ({onSelected, ...props}) => {
  LocaleConfig.locales['tr'] = langData;
  LocaleConfig.defaultLocale = 'tr';
  return (
    <Calendar
      onDayPress={day => {
        onSelected?.(day);
      }}
      {...props}
    />
  );
};
export default CustomCalendar;
