import React from 'react';
import moment from 'moment';

interface iTimerProps {
    date: string;
}

const Timer = ({ date }: iTimerProps) => {
    const now = moment(new Date());
    const duration = moment.duration(now.diff(moment(date)));
    //Get Years and subtract from duration
    let years = Math.floor(duration.asYears());
    duration.subtract(moment.duration(years, 'years'));
    //Get Days and subtract from duration
    let days = duration.days();
    duration.subtract(moment.duration(days, 'days'));
    //Get hours and subtract from duration
    let hoursBeforeDays = duration.hours();
    duration.subtract(moment.duration(hoursBeforeDays, 'hours'));
    let hours = hoursBeforeDays + days * 24;
    //Get Minutes and subtract from duration
    let minutes = duration.minutes();
    duration.subtract(moment.duration(minutes, 'minutes'));
    //Get seconds
    let seconds = duration.seconds();

    return (
        <div>
            <h5>Time elapsed since the start until now:</h5>
            <p>Years:{years}</p>
            <p>hours:{hours}</p>
            <p>minutes:{minutes}</p>
            <p>seconds:{seconds}</p>
        </div>
    );
};

export default Timer;
