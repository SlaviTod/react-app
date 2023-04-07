import * as Yup from 'yup';

const validationRequirements = {
    password: {
        min: 8,
        max: 40,
        match: /^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
    },
}

export const PassValidationSchema = (t) => Yup.object().shape({
    oldPass: Yup.string()
        .required(t('err_pass_required'))
        .min(validationRequirements.password.min, t('err_pass_min'))
        .max(validationRequirements.password.max, t('err_pass_max')),
    password: Yup.string()
        .required(t('err_pass_required'))
        .min(validationRequirements.password.min, t('err_pass_min'))
        .max(validationRequirements.password.max, t('err_pass_max'))
        .matches(validationRequirements.password.match, t('err_pass_match')),
    confirmPassword: Yup.string()
        .required(t('err_cf_pass_required'))
        .oneOf([Yup.ref("password"), null], t('err_cf_pass_not_match')),
});