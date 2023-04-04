import { useTranslation } from 'react-i18next';
import { LanguageSelect } from './LanguageSelect';

export const LanguageWrapper = ({
    wrapperClass
}) => {

    const {  i18n } = useTranslation();

    const onChangeLang = (lang_code) => {
        if(i18n.language !== lang_code) i18n.changeLanguage(lang_code);
    }

    return (
        <div className={wrapperClass}>
            <LanguageSelect defaultValue={i18n.language} onChangeLang={onChangeLang} />
        </div>
    );
};