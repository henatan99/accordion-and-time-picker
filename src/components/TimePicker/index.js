import { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

export default function DateTimePickerComp({ label, defaultValue, variant }) {
  const [dateTime, setDateTime] = useState(dayjs(defaultValue));
  
  const variants = {
    'static': <StaticDateTimePicker
                    label={label}
                    value={dateTime}
                    onChange={(newValue) => setDateTime(newValue)}
                />,
    'mobile': 
                <MobileDateTimePicker 
                    label={label}
                    value={dateTime}
                    onChange={(newValue) => setDateTime(newValue)}
                />,
    'desktop':
                <DesktopDateTimePicker 
                    label={label}
                    value={dateTime}
                    onChange={(newValue) => setDateTime(newValue)}
                />,
    'responsive': <DateTimePicker 
            label={label}
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
        />
    
  }
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        {
            variants[variant]
        }
      </DemoContainer>
    </LocalizationProvider>
  );
}

DateTimePickerComp.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(['mobile', 'desktop', 'static', 'responsive']),
    defaultValue: function(props, propName, componentName) {
        if (!dayjs(props[propName], 'YYYY-MM-DDTHH:mm', true).isValid()) {
          return new Error(
            `Invalid prop ${propName} supplied to ${componentName}. Expected format: YYYY-MM-DDTHH:mm.`
          );
        }
    }
}
