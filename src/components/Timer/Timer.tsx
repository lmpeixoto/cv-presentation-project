import React from 'react';
import moment from 'moment';

interface iTimerProps {
    date: string;
}

const Timer = ({ date }: iTimerProps) => {
    const now = moment(new Date());
    const yearsDiff = now.diff(date, 'years');
    const hoursDiff = now.diff(date, 'hours');
    const minutesDiff = now.diff(date, 'minutes');

    return (
        <div>
            <h5>Time elapsed since then:</h5>
            <p>Years:{yearsDiff}</p>
            <p>hours:{hoursDiff}</p>
            <p>minutes:{minutesDiff}</p>
        </div>
    );
};

export default Timer;
