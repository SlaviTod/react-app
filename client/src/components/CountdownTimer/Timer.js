import { useTranslation } from 'react-i18next';

import { padNumber } from './../../utilities/format/format';

export const Timer = ({
    days,
    hours,
    minutes,
    seconds,
}) => {

    const { t } = useTranslation();

    return (
        <>
            <div className="col-xl-2 col-md-4">
                <div className="time-box">
                    <span>{padNumber(days, 2)}</span>
                    <h3>{days === 1 ? t('day') : t('days')}</h3>
                </div>
            </div>
            <div className="col-xl-1 col-md-1 no-border">
                <div className="time-box"><span>:</span></div>
            </div>
            <div className="col-xl-2 col-md-4">
                <div className="time-box">
                    <span>{padNumber(hours, 2)}</span>
                    <h3>{hours === 1 ? t('hour') : t('hours')}</h3>
                </div>
            </div>
            <div className="col-xl-1 col-md-1 no-border">
                <div className="time-box"><h3>:</h3></div>
            </div>
            <div className="col-xl-2 col-md-4">
                <div className="time-box">
                    <span>{padNumber(minutes, 2)}</span>
                    <h3>{minutes === 1 ? t('minute') : t('minutes')}</h3>
                </div>
            </div>
            <div className="col-xl-1 col-md-1 no-border">
                <div className="time-box"><h3>:</h3></div>
            </div>
            <div className="col-xl-2 col-md-4">
                <div className="time-box">
                    <span>{padNumber(seconds, 2)}</span>
                    <h3>{seconds === 1 ? t('second') : t('seconds')}</h3>
                </div>
            </div>
        </>
    );
};