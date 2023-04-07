import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { useToastContext } from './../../contexts/ToastContex';

import { toastClassName, toastIcon } from '../../constants/toastData';

import './Toaster.css';

export const ToastItem = ({
    key,
    type,
    title,
    message,
    position,
    closeButton,
}) => {

    const { removeToastOnClose } = useToastContext();
    
    return (
        <ToastContainer key={key} className={type ? toastClassName[type] : ''} position={position ? position : 'top-end'}>
            <Toast onClose={() => removeToastOnClose(key)} animation={true}>
                <Toast.Header closeButton={true}>
                    {type && <span className="icon">{toastIcon[type]}</span>}
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}