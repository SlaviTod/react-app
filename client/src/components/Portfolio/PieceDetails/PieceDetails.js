import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { repertoireServiceFactory } from './../../../services/repertoaireService';
import { EditRepertoireForm } from './EditPiece/EditPiece';
import { PieceView } from './PieceView/PieceView';
import { useService } from './../../../hooks/useService';
import { commentServiceFactory } from './../../../services/commentService';
import { useCommentsContext } from './../../../contexts/CommentsContext';

import './PieceDetails.css';
import { CommentsC } from './Comments/Comments';

export const PieceDetails = () => {

    const { t } = useTranslation();
    const repertoireService = repertoireServiceFactory();
    const commentService = useService(commentServiceFactory);

    const { pieceId } = useParams();
    const [piece, setPiese] = useState();

    const { comments, onLoadComments } = useCommentsContext();

    useEffect(() => {
        repertoireService.getOnePiece(pieceId)
            .then(res => {
                setPiese(res.piece);
            })
            .catch(err => {
                console.log(err.message);
            })
        commentService.getPieceComments(pieceId)
            .then(res => {

                onLoadComments(res.comments);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [pieceId]);

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
                {comments && !isEditable && <CommentsC />}

                {(piece && isEditable) && <EditRepertoireForm piece={piece} onEditChange={onEditChange} />}

            </div>
        </section >
    );
};