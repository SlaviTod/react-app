import * as Yup from 'yup';

const validationRequirements = {
    password: {
        min: 8,
        max: 40,
        // match: /^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
    },
}

export const LoginValidationSchema = (t) => Yup.object().shape({
    email: Yup.string()
        .email(t('err_email'))
        .required(t('err_email_required')),
    password: Yup.string()
        .required(t('err_pass_required'))
        .min(validationRequirements.password.min, t('err_pass_min'))
        .max(validationRequirements.password.max, t('err_pass_max'))
        // .matches(validationRequirements.password.match, t('err_pass_match')),
});