export interface LoggedInIterface {
  value: boolean;
  token: string;
}

export interface UserInterface {
  email: string;
  password: string;
}

export interface Loginterface {
  email: string;
  password: string;
}

export interface TokenInterFace {
  index:number,
  id: number;
}

export interface LanguagesInterFace {
  id: number;
  problemCount: number;
  sectionCount: number;
  solutionCount: number;
  title: string;
  tryCount: number;
  url: string;
}

export interface TaskInterFace {
  description: string;
  id: number;
  languageId: number;
  maxRate: number;
  problemCount: number;
  solutionCount: number;
  title: string;
  tryCount: number;
  url: string;
}

export interface AlertInterFace {
  showAlert: boolean,
  msg: string
}