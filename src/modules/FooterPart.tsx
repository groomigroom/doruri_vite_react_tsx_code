import './FooterPart.css';

interface FooterPartProps {
    FooterPartText: string;
};

export default function FooterPart({ FooterPartText }: FooterPartProps) {
    return (
        <div className="footerpart_full">
            <p>{FooterPartText}</p>
        </div>
    );
};
