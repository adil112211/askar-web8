
export enum Language {
  EN = 'en',
  RU = 'ru',
  KZ = 'kz',
  ZH = 'zh',
}

export type Service = {
  id: string;
  emoji: string;
  image: string;
  title: Record<Language, string>;
  brief: Record<Language, string>;
  description: Record<Language, string>;
  features: Record<Language, string[]>;
  details: Record<Language, { title: string; content: string }[]>;
};

export type Translations = {
  [key in Language]: {
    header: {
      services: string;
      contact: string;
      logoAlt: string;
    };
    footer: {
      slogan: string;
      services: string;
      contactInfo: string;
      address: string;
      phone: string;
      email: string;
      rights: string;
    },
    home: {
      heroTitle: string;
      heroSubtitle: string;
      heroButton: string;
      advantagesTitle: string;
      advantages: { title: string; text: string }[];
      partnersTitle: string;
      stats: { label: string }[];
      ctaTitle: string;
      ctaButton: string;
      servicesTitle: string;
      allServicesButton: string;
    };
    services: {
      title: string;
      pageTitle: string;
      learnMore: string;
      contactForDetails: string;
      featuresTitle: string;
    };
    contactModal: {
        title: string;
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
        submitting: string;
        success: string;
        error: string;
    },
    breadcrumbs: {
      home: string;
      services: string;
    }
  };
};
