import { useEffect } from "react";

export const EngPage = (lang: string, defaultLang: string = 'ko') => {
    useEffect(() => {
        // 페이지 진입 시 언어 설정
        document.documentElement.lang = lang;

        // 페이지를 나갈 때 기존 언어로 복구
        return () => {
            document.documentElement.lang = defaultLang;
        };
    }, [lang, defaultLang]);
};