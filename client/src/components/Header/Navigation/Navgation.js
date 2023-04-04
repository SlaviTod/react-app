import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LanguageWrapper } from './../../LangSelect/LanguageWrapper';

import './Navigation.css';


export const Navigation = ({
    isLogged,
}) => {

    const { t } = useTranslation();

    return (
        <Nav className="navbar" bg="dark" variant="dark" defaultActiveKey="/">

            <Nav.Item><Nav.Link as={NavLink} to="/">{t("home")}</Nav.Link></Nav.Item>
            <NavDropdown title={t("about")}>
                <Nav.Item><Nav.Link as={NavLink} to="/about-us">{t("title")}</Nav.Link></Nav.Item>
                <NavDropdown.Divider />
                <Nav.Item><Nav.Link as={NavLink} to="/conductor">{t("conductor")}</Nav.Link></Nav.Item>
            </NavDropdown>
            {/* <Nav.Item><Nav.Link as={NavLink} to="/comming-up">Comming up</Nav.Link></Nav.Item> */}
            <Nav.Item><Nav.Link as={NavLink} to="/concerts">{t("concerts")}</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/portfolio">{t("portfolio")}</Nav.Link></Nav.Item>

            {isLogged &&
                    <>
            <Nav.Item><Nav.Link as={NavLink} to="/calendar">{t("calendar")}</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/repertoire">{t("repertoire")}</Nav.Link></Nav.Item>
            </>}

            <Nav.Item><Nav.Link as={NavLink} to="/contact">{t("contact")}</Nav.Link></Nav.Item>

            <LanguageWrapper wrapperClass="mx-3" />
            <i className="bi bi-list mobile-nav-toggle"></i>
        </Nav>
    );
};