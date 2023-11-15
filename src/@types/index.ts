export type Question = {
  id: number
  title: string
  options: {
    text: string
    isCorrect: boolean
  }[]
}
