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
}

export const UserValidationSchema = (t) => Yup.object().shape({
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
});