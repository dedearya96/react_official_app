import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import Hero2 from "../img/hero2.jpg";
import { ToastContainer, toast } from 'react-toastify';


export default function Hero() {
    const { t, i18n } = useTranslation();
    const notify = () => toast.success("Wow so easy!");
    return (
        <section id="hero">
            <div className="container">
                <ToastContainer />
                <div className="row">
                    <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                        <div data-aos="zoom-out">
                            <h1>{t('label_welcome')} </h1>
                            <h2>{t('label_desc_welcome')} </h2>
                            <div className="row">
                                <div className="m-1 pl-3">
                                    <div className="text-center text-lg-left">
                                        <a href="https://www.trafaline.com" className="btn-get-started scrollto">
                                            {t('btn_get_started')} </a>

                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="text-center text-lg-left">
                                        <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="btn-get-started bg-info scrollto">
                                            Bagikan</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 hero-img text-center" data-aos="zoom-out" data-aos-delay="300">
                        <img src={Hero2} className="img-fluid" alt="" width="300"
                            height="400" />
                    </div>
                </div>
            </div>
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>
        </section>
    )
}