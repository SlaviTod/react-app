import { Link } from 'react-router-dom';

export const MailTo = ({
    mailto,
}) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            
        </Link>
    )
}