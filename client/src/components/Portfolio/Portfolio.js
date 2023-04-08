import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import Pagination from 'react-bootstrap/Pagination';

import { useToastContext } from './../../contexts/ToastContex';
import { useRepertoireContext } from './../../contexts/PieceContext';
import { useService } from './../../hooks/useService';
import { repertoireServiceFactory } from './../../services/repertoaireService';
// import { usePagination } from './../../hooks/usePagination';
import { PiecesList } from './PiecesList/PiecesList';
import { toastType } from './../../constants/toastData';


import './Portfolio.css';

export const Portfolio = () => {

    const { t } = useTranslation();

    const { addToast } = useToastContext();

    const repertoireService = useService(repertoireServiceFactory);

    const { pieces, onDataLoaded } = useRepertoireContext();
    // const [itemsPerPage, setItemsPerPage] = useState(5);
    // const [totalItems, setTotalItems] = useState(0);

    // const [nPages, currentPage, setCurrentPage] = usePagination(totalItems, itemsPerPage);


    useEffect(() => {
        try {
            const getAllPieces = async () => {
                const res = await repertoireService.getAllPieces();

                onDataLoaded(res.repertoire);
            }
            getAllPieces();
        } catch (err) {
            addToast({
                type: toastType.error,
                title: t('error'),
                message: `${t('repertoire_msg_error')}. ${t('tryAgain')}`,
            })
        }
    }, []);

    return (
        <section id="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>{t('portfolio')}</h2>
                    <p>{t('portfolio_sub')}</p>
                </div>

                <PiecesList list={pieces}/>

                {/* // TODO  */}
                {/* <div>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />


                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div> */}

            </div>
        </section>
    );
};