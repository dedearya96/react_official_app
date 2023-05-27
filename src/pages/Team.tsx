import { useTranslation } from "react-i18next";
import Team1 from "../img/team/team1.jpg";
import Team3 from "../img/team/team3.png";

export default function Team() {
    const { t, i18n } = useTranslation();
    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>{t('title_team')} </h2>
                    <p>{t('label_desc_team')}  </p>
                </div>
                <div className="row" data-aos="fade-left">
                    <div className="col-lg-3 col-md-6">
                        <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pic"><img src={Team1} className="img-fluid"
                                alt="" />
                            </div>
                            <div className="member-info">
                                <h4>Dede Arya</h4>
                                <span className="text-black-50 font-weight-bold">Owner || UI/UX || Software Engineer</span>
                                <div className="social">
                                    <a href="https://web.facebook.com/de.widnyana"><i
                                        className="icofont-facebook"></i></a>
                                    <a href="https://www.instagram.com/dedearya96__/"><i
                                        className="icofont-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pic"><img src={Team3} className="img-fluid"
                                alt="" />
                            </div>
                            <div className="member-info">
                                <h4>Trafaline Official</h4>
                                <span className="text-black-50 font-weight-bold">Official</span>
                                <div className="social">
                                    <a href=""><i className="icofont-facebook"></i></a>
                                    <a href=""><i className="icofont-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}