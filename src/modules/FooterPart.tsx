import './FooterPart.css';

interface FooterPartProps {
    FooterPartText: string;
};

export default function FooterPart({ FooterPartText }: FooterPartProps) {
    return (
        <div className="footerpart_full">
            <p className='FooterPart_company_pp'>{FooterPartText}</p>
            60px
        </div>
    );
};
