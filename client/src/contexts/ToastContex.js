import { createContext, useContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({
    children,
}) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        const isContainToast = toasts.findIndex(t => t.message !== toast.message);
        if (isContainToast < 0) {
            setToasts(st => [...st, toast]);
            setTimeout(() => {
                setToasts(st => st.filter(t => t.message !== toast.message));
            }, toast.dellay || 7000);
        }
    }

    const removeToastOnClose = (message) => {
        setToasts(st => st.filter(t => t.message !== message));
    }

    const contextValues = {
        toasts,
        addToast,
        removeToastOnClose,
    };


    return (
        <>
            <ToastContext.Provider value={contextValues}>
                {children}
            </ToastContext.Provider>
        </>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);

    return context;
};