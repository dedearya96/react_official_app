import axios from "axios";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Data {
    users: number,
    posts: number,
    moments: number,
    auctions: number,
    products: number,
    stores: number,
    restos: number,
    services: number
}

const defaultData: Data = {
    users: 0,
    posts: 0,
    moments: 0,
    auctions: 0,
    products: 0,
    stores: 0,
    restos: 0,
    services: 0
};

export default function Counts() {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState<Data>(defaultData);
    const apiUrl: string = 'https://api.trafaline.com/public_data';

    useEffect(() => {
        getPublicData()
    }, []);

    const getPublicData = () => {
        axios.get(apiUrl)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {

            });
    }

    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-users"></i>
                            <span data-toggle="counter-up">{data.users}</span>
                            <p>{t('count_users')} </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-news bg-danger"></i>
                            <span data-toggle="counter-up">{data.posts}</span>
                            <p>{t('count_posts')}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-book bg-success"></i>
                            <span data-toggle="counter-up">{data.moments}</span>
                            <p>{t('count_moments')}</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-box bg-info"></i>
                            <span data-toggle="counter-up">{data.auctions}</span>
                            <p>Auctions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-bag bg-secondary"></i>
                            <span data-toggle="counter-up">{data.products}</span>
                            <p>Products</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-grocery bg-warning"></i>
                            <span data-toggle="counter-up">{data.stores}</span>
                            <p>Store</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-lunch bg-danger"></i>
                            <span data-toggle="counter-up">{data.restos}</span>
                            <p>Resto</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <div className="count-box">
                            <i className="icofont-repair bg-warning"></i>
                            <span data-toggle="counter-up">{data.services}</span>
                            <p>Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}