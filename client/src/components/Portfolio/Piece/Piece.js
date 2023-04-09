import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import { GiMusicalScore } from "react-icons/gi";
import { IoCloseSharp } from 'react-icons/io5';

import { useRepertoireContext } from './../../../contexts/PieceContext';
import { useAuthContext } from '../../../contexts/AuthContext';

import { role } from './../../../constants/roles';

import './Piece.css';

export const Piece = ({
    _id,
    category,
    translations,
}) => {

    const { i18n, t } = useTranslation();

    const { deletePiece } = useRepertoireContext();
    const { user } = useAuthContext();

    const isAuthorizedForDeletion = user && [role.admin, role.member].includes(user.role);
    // TODO add modal to confirm 

    return (
        <Link key={_id} to={`/portfolio/${_id}`} className="relative-position">
            <Card>
                {isAuthorizedForDeletion &&
                    <button type="button" className="form-icon close" onClick={(e) => { e.preventDefault(); deletePiece(_id) }}>
                        <IoCloseSharp />
                    </button>}
                <Card.Header>{translations[i18n.language].name}</Card.Header>
                <Card.Body>
                    {/* <div className="icon"><GiMusicalScore /></div> */}
                    <Card.Title>{t(category)}</Card.Title>
                    <Card.Text>
                        {translations[i18n.language].author && <><span>{t('author')}: </span>{translations[i18n.language].author}</>}
                        {translations[i18n.language].arrangement && <><span>{t('author')}: </span>{translations[i18n.language].arrangement}</>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};