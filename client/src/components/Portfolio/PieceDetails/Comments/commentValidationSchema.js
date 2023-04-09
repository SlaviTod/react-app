import * as Yup from 'yup';

const validationRequirements = {
    comment: {
        min: 1,
        max: 1000,
    },
}

export const CommentValidationSchema = (t) => Yup.object().shape({
    comment: Yup.string()
        .required(t('err_comment_required'))
        .max(validationRequirements.comment.max, t('err_pass_max')),
});

