import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function Contact() {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const apiUrl: string = 'https://api.trafaline.com/public_messages';

    async function handleSending(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(apiUrl, {
                name: name,
                email: email,
                message: message
            });
            setName('');
            setEmail('');
            setMessage('');
            console.log(response.data);
            setIsLoading(false);
            if (response.data.success == true) {
                toast.success('Message successfully created');
            } else {
                toast.error('Message failed created')
            }
        } catch (error) {
            toast.error('Message failed created')
            console.log(error);
        }

    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>{t('title_contact')} </h2>
                    <p>{t('label_desc_contact')} </p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <h4>{t('label_location')} </h4>
                                <p>Manggis. Karangasem, Denpasar-Bali</p>
                            </div>
                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4>{t('label_email')} </h4>
                                <p>trafaline.official@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4>{t('label_call')} </h4>
                                <p>+6282236292106</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
                        <form onSubmit={handleSending} method="post">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        placeholder={t('label_your_name')}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder={t('label_your_email')}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="messages"
                                    value={message}
                                    onChange={(event) => setMessage(event?.target.value)}
                                    placeholder={t('label_message')}
                                    required>
                                </textarea>
                            </div>
                            <div className="text-center">{isLoading ? (
                                <button className="btn btn-info" id="btn"
                                    type="submit" disabled>Sending</button>
                            ) : (
                                <button className="btn btn-info" id="btn"
                                    type="submit">Kirim</button>
                            )}

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}