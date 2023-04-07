import * as Yup from 'yup';

const validationRequirements = {
    firstName: {
        min: 2,
        max: 20,
        match: /^([A-Za-z]{2,}|[А-Яа-я]{2,})[ -]{0,1}([A-Za-z]{2,}|[А-Яа-я]{2,})+$/,
    },
    lastName: {
        min: 2,
        max: 20,
        match: /^[A-Za-z-]+|[А-Яа-я-]$/,
    },
    password: {
        min: 8,
        max: 40,
        match: /^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
    },
}

export const RegisterValidationSchema = (t) => Yup.object().shape({
    firstName: Yup.string()
        .required(t('err_firstName_required'))
        .min(validationRequirements.firstName.min, t('err_firstName_min'))
        .max(validationRequirements.firstName.max, t('err_firstName_max'))
        .matches(validationRequirements.firstName.match, t('err_firstName_match')),
    lastName: Yup.string()
        .required(t('err_lastName_required'))
        .min(validationRequirements.lastName.min, t('err_lastName_min'))
        .max(validationRequirements.lastName.max, t('err_lastName_max'))
        .matches(validationRequirements.firstName.match, t('err_lastName_match')),
    email: Yup.string()
        .email(t('err_email'))
        .required(t('err_email_required')),
    password: Yup.string()
        .required(t('err_pass_required'))
        .min(validationRequirements.password.min, t('err_pass_min'))
        .max(validationRequirements.password.max, t('err_pass_max'))
        .matches(validationRequirements.password.match, t('err_pass_match')),
    confirmPassword: Yup.string()
        .required(t('err_cf_pass_required'))
        .oneOf([Yup.ref("password"), null], t('err_cf_pass_not_match')),
});