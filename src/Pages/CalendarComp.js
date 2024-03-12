import React from 'react'
import useFetch from '../Components/useFetch'
import CalendarFetch from '../Components/CalendarFetch';
import { useState, useEffect } from 'react';

const CalendarComp =  ({user, apiData}) => {

    const [apiFormData, setApiFormData] = useState(null);

    useEffect(() => {
        const formData = new FormData();
        formData.append('school_group', apiData.schoolGroup);
        formData.append('db', apiData.db);
        formData.append('student_idx', user.calendarId);

        setApiFormData(formData);
    }, [user, apiData]);

    const {data: calendarData, error: calError, isPending: calIsPending} = useFetch('https://api.myeducare.ro/parent_api/parent_get_school_events.php', apiFormData);


  return (
    <div>
        {calError && <div>{calError}</div>}
        {calIsPending && <div>Loading...</div>}
        {calendarData && (
            <div>
                <h2>Calendar</h2>
                <CalendarFetch calendarData={calendarData}/>
            </div>
        )}
    </div>

  )
}

export default CalendarComp