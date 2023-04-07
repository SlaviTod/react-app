import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { useToastContext } from './../../contexts/ToastContex';

import { toastClassName, toastIcon } from '../../constants/toastData';

import './Toaster.css';

export const ToastItem = ({
    type,
    title,
    message,
    position,
}) => {

    const { removeToastOnClose } = useToastContext();

    return (
        <div
            key={message}
            aria-live="polite"
            aria-atomic="true"
            className="toast-container"
        >
            <ToastContainer className={type ? toastClassName[type] : ''} position={position ? position : 'top-end'}>
                <Toast onClose={() => removeToastOnClose(message)} animation={true}>
                    <Toast.Header closeButton={true}>
                        {type && <span className="icon">{toastIcon[type]}</span>}
                        <strong className="me-auto title">{title}</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}