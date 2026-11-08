export const subjects = [
  {
    id: "portugues",
    name: "Língua Portuguesa",
    short: "Português",
    description: "Leitura atenta. Escrita precisa.",
    color: "blue",
  },
  {
    id: "legislacao",
    name: "Legislação",
    short: "Legislação",
    description: "Conheça as normas, entenda a aplicação.",
    color: "amber",
  },
  {
    id: "especificos",
    name: "Conhecimentos Específicos",
    short: "Específicos",
    description: "Seu conhecimento em web, na prática.",
    color: "green",
  },
] as const;
export type Subject = (typeof subjects)[number]["id"];
export type Difficulty = "Difícil" | "Muito difícil";
export type Question = {
  id: string;
  subject: Subject;
  topicId: string;
  difficulty: Difficulty;
  prompt: string;
  baseText?: { title: string; text: string };
  code?: string;
  options: [string, string, string, string, string];
  correct: number;
  explanation: string;
  rationale: [string, string, string, string, string];
  reference?: string;
  verified: boolean;
};
export type Topic = {
  id: string;
  subject: Subject;
  title: string;
  sourcePage: string;
};
export type Bank = {
  source: {
    status: "pending" | "verified";
    title: string;
    version: string;
    verifiedAt: string | null;
    fullEditalReceived?: boolean;
    notes?: string[];
  };
  topics: Topic[];
  questions: Question[];
};
export type Attempt = { choice: number; correct: boolean; at: string };
export type Simulation = {
  ids: string[];
  choices: Record<string, number>;
  index: number;
  finished: boolean;
  startedAt: string;
};
export type Progress = {
  version: 1;
  updatedAt: string;
  answers: Record<string, Attempt>;
  bookmarks: string[];
  cursor: string | null;
  history: {
    date: string;
    correct: boolean;
    subject: Subject;
    topicId: string;
  }[];
  simulation: Simulation | null;
};
