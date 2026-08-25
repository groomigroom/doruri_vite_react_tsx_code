import './FooterPart.css';

interface FooterPartProps {
    FooterPartText: string;
};

export default function FooterPart100vh({ FooterPartText }: FooterPartProps) {
    return (
        <div className="FooterPart100vh_full">
            <p className='FooterPart_company_pp'>{FooterPartText}</p>
        </div>
    );
};
