import { useToastContext } from './../../contexts/ToastContex';

import { ToastItem } from './Toast';

export const ToastContainer = () => {

    const { toasts } = useToastContext();
    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                className="toast-container"
            >
                {toasts.map(toast => <ToastItem {...toast} key={toast.key}/>)}
            </div>
        </>
    );
};