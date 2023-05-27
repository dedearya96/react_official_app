import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";

export default function Products() {
    const { t, i18n } = useTranslation();
    const notify = (message: any) => toast.success(message);
    return (
        <section id="products" className="features m-0 p-1">
            <ToastContainer />
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>{t('titel_products')} </h2>
                    <p>{t('label_desc_products')}</p>
                </div>
                <div className="counts bg-white">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-3 col-md-6 ">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Trafaline Website</h5>
                                    <a href="https://www.trafaline.com"><p>trafaline.com</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Trafaline Website V2</h5>
                                    <a href="https://www.m.trafaline.com"><p>m.trafaline.com</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Trafaline API</h5>
                                    <a href="https://www.api.trafaline.com"><p>api.trafaline.com</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <a href="https://m.trafaline.com">
                                        <i className="icofont-news"></i>
                                    </a>
                                    <h5>Cloud Storage</h5>
                                    <a href="https://www.cloudstorage.trafaline.com"><p>cloudstorage.trafaline.com</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Irene AI</h5>
                                    <a href="https://www.ireneai.trafaline.com"><p>ireneai.trafaline.com</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Studio</h5>
                                    <a href="https://www.studio.trafaline.com"><p>studio.trafaline.com</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Blog</h5>
                                    <a href="https://www.blog.trafaline.com"><p>blog.trafaline.com</p></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Gift Coin</h5>
                                    <a href="https://www.giftcoin.trafaline.com"><p>giftcoin.trafaline.com</p></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="container mt-5">
                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Trafaline Mobile</h5>
                                    <a onClick={() => notify('Trafaline Mobile Android Version Is Comming Soon')} href="#"><p>Android</p></a>
                                    <a onClick={() => notify('Trafaline Mobile iOS Version Is Comming Soon')} href="#"><p>iOS</p></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Studio Mobile</h5>
                                    <a onClick={() => notify('Studio Mobile Android Version Is Comming Soon')} href="#"><p>Android</p></a>
                                    <a onClick={() => notify('Studio Mobile iOS Version Is Comming Soon')} href="#"><p>iOS</p></a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="icofont-news"></i>
                                    <h5>Irene AI Mobile</h5>
                                    <a onClick={() => notify('Irene AI Mobile Version Is Comming Soon')} href="#"><p>Android</p></a>
                                    <a onClick={() => notify('Irene AI Mobile iOS Version Is Comming Soon')} href="#"><p>iOS</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}