import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

import { RepertoireValidationSchema } from './repertoireValidationSchema';

export const RepertoireForm = () => {
    const initialValues = {
        category: '',
        videoLinks: '',
        translations: {
            en: {
                name: '',
                author: '',
                arrangement: '',
                description: '',
            },
            bg: {
                name: '',
                author: '',
                arrangement: '',
                description: '',
            },
        },
    };

    const { t } = useTranslation();


    return (
        <div id="piece-form">
           
        </div>
        );
};