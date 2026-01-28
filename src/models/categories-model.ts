export interface PortfolioDataModel {
  personalInfos: {
    name: string;
    photo: string;
    job: string;
    linkedin: string;
    curriculum: string;
    location: string;
    phone: string;
    email: string;
  };

  skills: {
    hardSkills: {
      id: string;
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
      id: string;
      name: string;
      description: string;
      repositorie: string;
      deploy: string;
      github: boolean;
    }[];
  };

  professionalExperiences: {
    experiences: {
      id:string;
      name: string;
      period: string;
      description: string;
    }[];
  };

  academic: {
    course: {
      id: string;
      name: string;
      period: string;
    }[];
  };
}
