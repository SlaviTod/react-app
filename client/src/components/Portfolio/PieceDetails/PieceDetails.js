import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { repertoireServiceFactory } from './../../../services/repertoaireService';
import { EditRepertoireForm } from './EditPiece/EditPiece';
import { PieceView } from './PieceView/PieceView';
import { useCommentsContext } from './../../../contexts/CommentsContext';

import './PieceDetails.css';
import { Comments } from './Comments/Comments';

export const PieceDetails = () => {

    const {  t } = useTranslation();
    const repertoireService = repertoireServiceFactory();

    const { pieceId } = useParams();
    const [piece, setPiese] = useState();

    // const { comments } = useCommentsContext();

    useEffect(() => {
        repertoireService.getOnePiece(pieceId)
            .then(res => {
                setPiese(res.piece);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    const [isEditable, setIsEditable] = useState(false);

    const onEditChange = () => {
        setIsEditable(st => !st);
    }

    return (
        <section id="piece-details">
            <div className="container">

                <div className="section-title">
                    <h2>{t('portfolio')}</h2>
                    <p>{t('piece_sub')}</p>
                </div>

                {(piece && !isEditable) && <PieceView piece={piece} onEditChange={onEditChange} />}
                {(piece && isEditable) && <EditRepertoireForm piece={piece} onEditChange={onEditChange} />}

                {/* {comments && <Comments comments={comments} />} */}
            </div>
        </section >
    );
};