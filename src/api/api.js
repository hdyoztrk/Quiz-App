const shuffleArray = (e) => {
  return [...e].sort(() => Math.random() - 0.5);
};

export const quizData = async (difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(url)).json();
  return data.results.map((e) => ({
    ...e,
    answers: shuffleArray([...e.incorrect_answers, e.correct_answer]),
  }));
};
