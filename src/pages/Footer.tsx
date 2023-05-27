import React from "react";
import { useTranslation } from "react-i18next";
import Share from "./Share";

export default function Footer() {

    const { t, i18n } = useTranslation();
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    <div className="footer-info">
                        <p>Manggis. Karangasem, Denpasar-Bali</p>
                        <p> <strong>{t('label_call')} </strong> +6282236292106</p>
                        <p> <strong>{t('label_email')} </strong> trafaline.official@gmail.com</p>
                        <div className="social-links mt-3 mb-3">
                            {/* <a href="" className="facebook"><i
                                className="bx bxl-facebook"></i></a>
                            <a href="" className="instagram"><i
                                className="bx bxl-instagram"></i></a> */}
                            <Share />
                        </div>
                    </div>
                    &copy; Trafaline Community {(new Date().getFullYear())}
                </div>
            </div>
        </footer>
    );
}