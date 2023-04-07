import { FaRegUserCircle } from 'react-icons/fa';

import { AvatarImage } from './../AvatarImage/AvatarImage';

export const UserAvatar = ({
    avatar,
}) => {
    return (
        <>
            {(!avatar) &&
                <div className="user-icon" >
                    <FaRegUserCircle />
                </div>}
            {avatar &&
                <AvatarImage imgUrl={avatar} className="rounded-avatar" />}
        </>
    );
};