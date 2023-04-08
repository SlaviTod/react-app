import { Piece } from './../Piece/Piece';

export const PiecesList = ({
    list
}) => {
    return (
        <>
            {list && list.map(piece => <Piece key={piece._id} {...piece} />)}
        </>
    );
};