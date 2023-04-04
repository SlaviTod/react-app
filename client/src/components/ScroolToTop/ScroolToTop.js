import { Link } from 'react-router-dom';
import { BsArrowUp } from 'react-icons/bs';

import { useScroolToTop } from './../../hooks/useScroolToTop';

import './ScroolToTop.css';

export const ScroolToTop = ({
    scroolToTop
}) => {
    const showScroolToTop = useScroolToTop();

    return (
        <Link className={`scrool-to-top d-flex align-items-center justify-content-center${showScroolToTop ? ' active' : ''}`}
            onClick={scroolToTop}>
            <BsArrowUp />
        </Link>
    );
};