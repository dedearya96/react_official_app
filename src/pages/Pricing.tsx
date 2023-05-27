import { useTranslation } from "react-i18next";

export default function Pricing() {
    const { t, i18n } = useTranslation();
    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>{t('title_account_level')} </h2>
                    <p>{t('label_desc_account_level')} </p>
                </div>
                <div className="row" data-aos="fade-left">
                    <div className="col-lg-4 col-md-6">
                        <div className="box" data-aos="zoom-in" data-aos-delay="100">
                            <h3>Free</h3>
                            <h4><sup>{t('features_coins')} </sup> 0 /
                                {t('label_month')} </h4>
                            <ul>
                                <li>{t('label_free_account')} </li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://www.trafaline.com" className="btn-buy bg-info">{t('btn_get_started')} </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div className="box" data-aos="zoom-in" data-aos-delay="300">
                            <h3>VIP</h3>
                            <h4><sup>{t('features_coins')} </sup>500 /
                                {t('label_month')} </h4>
                            <ul>
                                <li>{t('label_vip_account')} </li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="https://www.trafaline.com" className="btn-buy bg-info">{t('btn_get_started')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}