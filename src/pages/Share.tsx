import { useState, useEffect } from "react";
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    TwitterIcon,
    TwitterShareButton,
    TelegramIcon,
    TelegramShareButton,
    VKIcon,
    VKShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    EmailIcon,
    EmailShareButton,
} from 'react-share';


export default function Share() {

    const [url, setUrl] = useState('');

    useEffect(() => { setUrl('https://www.official.trafaline.com') },[]);

    return (
        <div>
            <p>Share to:</p>
            <FacebookShareButton
                url={url}
                quote={'Trafaline Official'}
                hashtag="#socialbussiness"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton
                url={url}
                title={'Trafaline Official'}
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton
                url={url}
                title={'Trafaline Official'}
                hashtags={["#socialbussiness"]}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <TelegramShareButton
                url={url}
                title={'Trafaline Official'}
            >
                <TelegramIcon size={32} round />
            </TelegramShareButton>
            <VKShareButton
                url={url}
                title={'Trafaline Official'}
            >
                <VKIcon size={32} round />
            </VKShareButton>
            <LinkedinShareButton
                url={url}
                title={'Trafaline Official'}
            >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton
                url={url}
                title={'Trafaline Official'}
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    );
}