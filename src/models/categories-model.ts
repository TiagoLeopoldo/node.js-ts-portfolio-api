export interface PortfolioDataModel {
  personalInfos: {
    name: string;
    photo: string;
    job: string;
    linkedin: string;
    location: string;
    phone: string;
    email: string;
  };

  skills: {
    hardSkills: {
      name: string;
      logo: string;
    }[];
    softSkills: string[];
  };

  languages: {
    id: string;
    language: string;
  }[];

  portfolio: {
    projects: {
      name: string;
      description: string;
      repositorie: string;
      deploy: string;
      github: boolean;
    }[];
  };

  professionalExperiences: {
    experiences: {
      name: string;
      period: string;
      description: string;
    }[];
  };

  academic: {
    course: {
      name: string;
      period: string;
    }[];
  };
}
