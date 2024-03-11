export type Criteria = {
    id: number;
    criteria: string;
    isLink: boolean;
    toLink?: string;
};

export type LinkItemFooter = {
    linkHref: string;
    linkLabel: string;
};

export type informationFooter = {
    nameCol: string;
    linkGroup: LinkItemFooter[];
};
