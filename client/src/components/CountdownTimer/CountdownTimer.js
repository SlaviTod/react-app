import { Expired } from './Expired';
import { Timer } from './Timer';
import { useCountdown } from './../../hooks/useCountdown';

import './CountdownTimer.css';

export const CountdownTimer = ({
    targetDate,
    message,
}) => {

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <div className="row gy-4 mt-5 justify-content-center">
            {days + hours + minutes + seconds <= 0 && <Expired message={message} />}

            {days + hours + minutes + seconds > 0 && <Timer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds} />}
        </div>
    );
};