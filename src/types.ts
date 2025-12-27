export interface Project {
    id: string;
    title: string;
    category: string;
    subtitle: string;
    tools: string[];
    image: string;
    description: string;
    challenge: string | React.ReactNode;
    research: string | React.ReactNode;
    solution: string | React.ReactNode;
    impact: string | React.ReactNode;
    url?: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ElementType;
}
