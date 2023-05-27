import { useTranslation } from "react-i18next";

export default function Features() {
    const { t, i18n } = useTranslation();
    return (
        <section id="features" className="features m-0 p-1">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>{t('title_features')}</h2>
                    <p>{t('label_desc_features')} </p>
                </div>
                <div className="row" data-aos="fade-left">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <i className="ri-image-line" style={{ color: "#ffbb2c" }}></i>
                            <h3><a href="">{t('features_posts')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <i className="ri-video-line" style={{ color: "#5578ff" }}></i>
                            <h3><a href="">{t('features_moments')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                            <i className="ri-history-line" style={{ color: "#e80368" }}></i>
                            <h3><a href="">{t('features_stories')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <i className="ri-store-line" style={{ color: "#e361ff" }}></i>
                            <h3><a href="">{t('features_marketplace')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
                            <i className="ri-heart-line" style={{ color: "#fb0202" }}></i>
                            <h3><a href="">{t('features_match')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <i className="ri-gradienter-line" style={{ color: "#ffa76e" }}></i>
                            <h3><a href="">{t('features_visitor_profile')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
                            <i className="ri-user-line" style={{ color: "#11dbcf" }}></i>
                            <h3><a href="">{t('features_users_online')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                            <i className="ri-restaurant-line" style={{ color: "#4233ff" }}></i>
                            <h3><a href="">Restos</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                            <i className="ri-tools-line" style={{ color: "#4233ff" }}></i>
                            <h3><a href="">Services</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                            <i className="ri-store-line" style={{ color: "#4233ff" }}></i>
                            <h3><a href="">Stores</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="450">
                            <i className="ri-add-line" style={{ color: "#b2904f" }}></i>
                            <h3><a href="">{t('features_suggestion')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
                            <i className="ri-user-line" style={{ color: "#b20969" }}></i>
                            <h3><a href="">{t('features_friend')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="550">
                            <i className="ri-vip-line" style={{ color: "#ff5828" }}></i>
                            <h3><a href="">{t('features_account_level')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
                            <i className="ri-group-line" style={{ color: "#3b0aeb" }}></i>
                            <h3><a href="">Group</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
                            <i className="ri-flag-line" style={{ color: "#cc2983" }}></i>
                            <h3><a href="">{t('features_multilanguage')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
                            <i className="ri-car-line" style={{ color: "#cc5429" }}></i>
                            <h3><a href="">{t('features_gifts')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
                            <i className="ri-coins-line" style={{ color: "#29cc61" }}></i>
                            <h3><a href="">{t('features_coins')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <i className="ri-messenger-line" style={{ color: "#e361ff" }}></i>
                            <h3><a href="">{t('features_chatting')} </a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="600">
                            <i className="ri-more-line" style={{ color: "#29cc61" }}></i>
                            <h3><a href="">{t('features_more')} </a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}