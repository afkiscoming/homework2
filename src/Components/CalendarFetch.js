import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarFetch = ({calendarData}) => {

    const localizer = momentLocalizer(moment);

    const parseDateString = (dateString) => {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6) - 1;
        const day = dateString.substring(6, 8);
        return new Date(year, month, day);
    };
    
    const transformedEvents = calendarData.data.map(event => ({
        title: `${event.text} (${event.name})`,
        description: event.desc1,
        start: parseDateString(event.start_date),
        end: parseDateString(event.end_date)
    }));
    
      console.log(transformedEvents)

  return (
        <div>
            { <Calendar
                localizer={localizer}
                events={transformedEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            /> }
        </div>
  )
}

export default CalendarFetch