import { SocialMedia } from './SocialMedia';

export const SocialMediaList = ({
    mediaList,
}) => {
    const medias = Object.keys(mediaList);

    return (
        <>
            {medias.map(m => mediaList[m] && <SocialMedia key={m} media={m} link={mediaList[m]} />)}
        </>
    );
};