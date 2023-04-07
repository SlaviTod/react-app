import * as Yup from 'yup';

const validationRequirements = {
    name: {
        min: 2,
        max: 50,
        match: /^[A-Za-zА-Яа-я .,/:!-]+$/,
    },
    author: {
        min: 2,
        max: 50,
        match: /^[A-Za-zА-Яа-я -]+$/,
    },
    arrangement: {
        min: 2,
        max: 50,
        match: /^[A-Za-zА-Яа-я -]+$/,
    },
    description: {
        min: 2,
        max: 1000,
    }
}

export const RepertoireValidationSchema = (t) => Yup.object().shape({
    category: Yup.string().required('You must pick a category'),
    videoLinks: Yup.array().of(Yup.string()),
    translations: Yup.object().shape({
        en: Yup.object().shape({
            name: Yup.string()
                .required(t('err_name_r_required'))
                .min(validationRequirements.name.min, t('err_name_r_min'))
                .max(validationRequirements.name.max, t('err_name_r_max'))
                .matches(validationRequirements.name.match, t('err_name_r_match')),
            author: Yup.string()
                .required(t('err_author_r_required'))
                .min(validationRequirements.author.min, t('err_author_r_min'))
                .max(validationRequirements.author.max, t('err_author_r_max'))
                .matches(validationRequirements.author.match, t('err_author_r_match')),
            arrangement: Yup.string()
                .required(t('err_arrangement_r_required'))
                .min(validationRequirements.arrangement.min, t('err_arrangement_r_min'))
                .max(validationRequirements.arrangement.max, t('err_arrangement_r_max'))
                .matches(validationRequirements.arrangement.match, t('err_arrangement_r_match')),
            description: Yup.string()
                .required(t('err_description_r_required'))
                .min(validationRequirements.description.min, t('err_description_r_min'))
                .max(validationRequirements.description.max, t('err_description_r_max')),
        }),
        bg: Yup.object().shape({
            name: Yup.string()
                .required(t('err_name_r_required'))
                .min(validationRequirements.name.min, t('err_name_r_min'))
                .max(validationRequirements.name.max, t('err_name_r_max'))
                .matches(validationRequirements.name.match, t('err_name_r_match')),
            author: Yup.string()
                .required(t('err_author_r_required'))
                .min(validationRequirements.author.min, t('err_author_r_min'))
                .max(validationRequirements.author.max, t('err_author_r_max'))
                .matches(validationRequirements.author.match, t('err_author_r_match')),
            arrangement: Yup.string()
                .required(t('err_arrangement_r_required'))
                .min(validationRequirements.arrangement.min, t('err_arrangement_r_min'))
                .max(validationRequirements.arrangement.max, t('err_arrangement_r_max'))
                .matches(validationRequirements.arrangement.match, t('err_arrangement_r_match')),
            description: Yup.string()
                .required(t('err_description_r_required'))
                .min(validationRequirements.description.min, t('err_description_r_min'))
                .max(validationRequirements.description.max, t('err_description_r_max')),
        }),
    }),
});
