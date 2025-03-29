export interface PersonalInfo {
  name: string;
  email: string;
  location: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface CareerItem {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  logoUrl: string;
  logoAlt: string;
}

export interface SkillItem {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  countryEmoji: string;
}

export interface Resume {
  info: PersonalInfo;
  career: CareerItem[];
  skills: SkillItem[];
  education: EducationItem[];
}