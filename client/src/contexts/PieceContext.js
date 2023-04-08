import { createContext, useEffect, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useToastContext } from './ToastContex';
import { useService } from './../hooks/useService';
import { repertoireServiceFactory } from './../services/repertoaireService';
import { toastType } from './../constants/toastData';



export const RepertoireContext = createContext();

export const RepertoireProvider = ({
    children,
}) => {
    const [pieces, setPieces] = useState();

    const repertoireService = useService(repertoireServiceFactory);

    const { addToast } = useToastContext();
    const { t } = useTranslation();
    const navigate = useNavigate();


    const onDataLoaded = (values) => {
        setPieces(values);
    }

    // useEffect(() => {
    //     try {
    //         const getAllPieces = async () => {
    //             const res = await repertoireService.getAllPieces();

    //             setPieces(res.repertoire);
    //         }
    //         getAllPieces();
    //     } catch (err) {
    //         addToast({
    //             type: toastType.error,
    //             title: t('error'),
    //             message: `${t('repertoire_msg_error')}. ${t('tryAgain')}`,
    //         })
    //     }
    // }, []);


    const editPiece = async (pieceId, values) => {
        setPieces(state => state.map(x => x._id === pieceId ? values : x))

        navigate(`/portfolio/${pieceId}`);
    };


    const deletePiece = async (pieceId) => {
        try {
            await repertoireService.deletePiece(pieceId);

            setPieces(state => state.filter(piece => piece._id !== pieceId));
        } catch (err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('delete_repertoire_msg_error')}. ${t('tryAgain')}`,
            })
        }
    };

    const contextValues = {
        pieces,
        onDataLoaded,
        editPiece,
        deletePiece,
    };


    return (
        <>
            <RepertoireContext.Provider value={contextValues}>
                {children}
            </RepertoireContext.Provider>
        </>
    );
};

export const useRepertoireContext = () => {
    const context = useContext(RepertoireContext);

    return context;
};