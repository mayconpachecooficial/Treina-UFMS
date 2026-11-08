// Fonte: edital integral enviado, itens 9.1 e 9.2 (p. 8), 10.1 e 10.2 (p. 10).
export const exam = {
  totalQuestions: 60,
  totalPoints: 100,
  durationHours: 4,
  minimumPercentage: 50,
  zeroInAnyAreaEliminates: true,
  areas: [
    { name: "Língua Portuguesa", questions: 15, points: 15, available: true },
    { name: "Língua Inglesa", questions: 5, points: 5, available: false },
    { name: "Legislação", questions: 10, points: 20, available: true },
    { name: "Raciocínio Lógico", questions: 10, points: 20, available: false },
    {
      name: "Conhecimentos Específicos",
      questions: 20,
      points: 40,
      available: true,
    },
  ],
} as const;
