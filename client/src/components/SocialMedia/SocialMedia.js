import { Link } from 'react-router-dom';
import { socialMediaIcons } from './../../constants/socialMediaIcons';

export const SocialMedia = ({
    media,
    link,
}) => {
    return (
        <>
            <Link to={link} className="social" target="_blank" rel="noreferrer">
                {socialMediaIcons[media] &&
                    <>
                        {socialMediaIcons[media]}
                    </>}
            </Link>
        </>
    );
};