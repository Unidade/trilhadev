type Question = {
  question: string
  answer: string
  options: string[]
}

type Step = {
  title: string
}

export const fibonacciQuestionData: Question[] = [
  {
    question: 'Seja a sequência: 3 e 5, qual o próximo número?',
    answer: '8',
    options: ['8', '7'],
  },
]
