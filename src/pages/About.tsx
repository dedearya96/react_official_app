import { useTranslation } from "react-i18next";
import Desktop from "../img/desktop.png";

export default function About() {
    const { t, i18n } = useTranslation();
    return (
        <section id="about" className="about mt-5 mb-5 p-0">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <img src={Desktop} className="img-fluid animated" alt=""
                        width="600" height="400" />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                        data-aos="fade-left">
                        <h3>{t('label_about')} </h3>
                        <p>{t('label_desc_about')}</p>
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon"><i className="bx bx-world"></i></div>
                            <h4 className="title"><a href="">Website</a></h4>
                            <p className="description">{t('label_desc_website')} </p>
                        </div>
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon"><i className="bx bx-phone"></i></div>
                            <h4 className="title"><a href="">Mobile Phone</a></h4>
                            <p className="description">{t('label_desc_android')} </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}