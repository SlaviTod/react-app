import { createContext, useContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({
    children,
}) => {
        const [toasts, setToasts] = useState([]);

        const addToast = (toast) => {
            setToasts(st => [...st, toast]);
            setTimeout(() => {
                setToasts(st => st.filter(t => t.key !== toast.key));
            }, toast.dellay || 7000);
        }

        const removeToastOnClose = (toast) => {
            setToasts(st => st.filter(t => t.key !== toast.key));
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