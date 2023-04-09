import { BsCheckCircle, BsEmojiFrown, BsFillExclamationTriangleFill } from 'react-icons/bs';

export const toastType = {
    success: 'success',
    error: 'error',
    warning: 'warning'
}

export const toastIcon = {
    success: <BsCheckCircle />,
    error: <BsEmojiFrown />,
    warning: <BsFillExclamationTriangleFill />,
}

export const toastClassName = {
    success: 'toast-success',
    error: 'toast-error',
    warning: 'toast-warning'
}