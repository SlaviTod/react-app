import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from './../../constants/languages';

import './LanguageSelect.css';


export const LanguageSelect = ({
    defaultValue,
    onChangeLang,
}) => {

    const { t } = useTranslation();

    return (
        <>
            <DropdownButton className="flag-container" title={
                <img className="flag"
                    src={`img/flags/${defaultValue}.png`}
                    alt=""
                />
            }>
                {LANGUAGES.map(({ code, label }) => (
                    <Dropdown.Item onClick={() => onChangeLang(code)} key={code}>
                        <img className="flag" src={`img/flags/${code}.png`} alt={t(label)} />
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </>
    );
};