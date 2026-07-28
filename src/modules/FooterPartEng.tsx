import './FooterPart.css';

interface FooterPartEngProps {
    FooterPartEngText: string;
}

export default function FooterPartEng({ FooterPartEngText }: FooterPartEngProps) {
    return (
        <div className="footerpart_full">
            <p className='FooterPart_company_pp'>{FooterPartEngText}</p>
        </div>
    );
};


