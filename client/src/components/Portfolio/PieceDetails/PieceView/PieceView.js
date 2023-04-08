import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/youtube';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { BsPencilSquare } from 'react-icons/bs';

import { useAuthContext } from './../../../../contexts/AuthContext';
import { role } from './../../../../constants/roles';

export const PieceView = ({
    piece,
    onEditChange
}) => {

    const { i18n, t } = useTranslation();

    const { user } = useAuthContext();

    const isAuthorizedForDeletion = user && [role.admin, role.member].includes(user.role);

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="v-player">
                    <ReactPlayer url={piece.videoLinks[0]} type="video/mp4" />
                </div>
            </div>
            <div className="col-md-4 relative-position">
                {isAuthorizedForDeletion &&
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip className="btn-icon-t" > {t('updatePiece')} </Tooltip>
                        }
                    >
                        <button type="button" className="form-icon edit" onClick={onEditChange}>
                            <BsPencilSquare />
                        </button>
                    </OverlayTrigger>}
                <h2 className="underline">{piece.translations[i18n.language].name}</h2>
                <p>{t(piece.category)}</p>
                {piece.translations[i18n.language].author && <>
                    <p>{t('author')}</p>
                    <h3>{piece.translations[i18n.language].author}</h3>
                </>}
                {piece.translations[i18n.language].arrangement &&
                    <>
                        <p>{t('arrangement')}</p>
                        <h3>{piece.translations[i18n.language].arrangement}</h3>
                    </>}
                <br />
                <p>{piece.translations[i18n.language].description}</p>
            </div>
        </div>
    );
};