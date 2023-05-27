import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import Logo from "../img/trafaline.png";

export default function Header() {
    const { t, i18n } = useTranslation();
    const notify = (message: any) => toast.success(message);
    const [selectedLang, setSelectedLang] = useState('en');
    const currentLanguage = i18n.language;

    useEffect(() => {
        setSelectedLang(currentLanguage)
    }, [])

    const changeLanguage = (language: any) => {
        setSelectedLang(language);
        i18n.changeLanguage(language);
        if (language == 'id') {
            notify('Indonesia')
        } else {
            notify('English')
        }
    }


    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex align-items-center">
                <div className="logo mr-auto">
                    <h1 className="text-light">
                        <a href="index.html">
                            <img src={Logo} alt=""  height={40} width={40}/>
                        <span className="ml-4">TRAFALINE</span>
                        </a>
                    </h1>
                </div>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>{t('tab_home')} </Link></li>
                        <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>{t('tab_about')} </Link></li>
                        <li><Link to="products" spy={true} smooth={true} offset={50} duration={500}>{t('tab_products')} </Link></li>
                        <li><Link to="features" spy={true} smooth={true} offset={50} duration={500}>{t('tab_features')}</Link></li>
                        <li> <Link to="team" spy={true} smooth={true} offset={50} duration={500}>{t('tab_team')}</Link></li>
                        <li><Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>{t('tab_account_level')} </Link></li>
                        {/* <li><a href="">{t('tab_gallery')} </a></li> */}
                        <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>{t('tab_contact')} </Link></li>
                        <li className="drop-down"><a href="">
                            {selectedLang == 'id' ? 'ID' : 'EN'}</a>
                            <ul>
                                <li><a onClick={() => changeLanguage('id')} className="dropdown-item font-weight-bold" style={{ color: selectedLang == 'id' ? 'green' : '' }}>ID {selectedLang == 'id' ? '•' : ''}</a></li>
                                <li><a onClick={() => changeLanguage('en')} className="dropdown-item font-weight-bold" style={{ color: selectedLang == 'en' ? 'green' : '' }}>EN {selectedLang == 'en' ? '•' : ''}</a></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
                {/* <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button> */}
            </div >
        </header >
    )
}