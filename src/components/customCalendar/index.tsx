import moment from 'moment';
import * as React from 'react';
import {
  Calendar,
  LocaleConfig,
  DateData,
  CalendarProps,
} from 'react-native-calendars';
import {langData} from './tr';

interface CustomCalendarProps extends Omit<CalendarProps, 'onDayPress'> {
  onSelected?: (day: DateData) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  onSelected,
  ...props
}) => {
  LocaleConfig.locales['tr'] = langData;
  LocaleConfig.defaultLocale = 'tr';

  const handleDayPress = React.useCallback(
    (day: DateData) => {
      onSelected?.(day);
    },
    [onSelected],
  );

  return <Calendar onDayPress={handleDayPress} {...props} />;
};

CustomCalendar.displayName = 'CustomCalendar';

export default CustomCalendar;
