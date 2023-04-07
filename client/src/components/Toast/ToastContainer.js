import { useToastContext } from './../../contexts/ToastContex';

import { ToastItem } from './Toast';

export const ToastContainer = () => {

    const { toasts } = useToastContext();
    return (
        <>
            {toasts.map(toast => <ToastItem {...toast} key={toast.key} />)}
        </>
    );
};