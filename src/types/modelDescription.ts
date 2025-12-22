export interface ModelDescription {
    intro: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3?: string;
    paragraph4?: string;
}

export interface MultilingualModelDescription {
    tr: ModelDescription;
    en: ModelDescription;
    ru: ModelDescription;
    ar: ModelDescription;
}
