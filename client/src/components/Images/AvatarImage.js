import './Avatar-image.css';

export const AvatarImage = ({
    imgUrl,
    className,
}) => {
    return (
        <img src={imgUrl} alt="" className={className} />
    );
};