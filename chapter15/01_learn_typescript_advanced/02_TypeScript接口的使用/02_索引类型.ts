// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue"
}


interface ILanguageYear {
  [name: string]: number
}

const languageYear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}

interface LanguageBirth {
  Java: number // Java属性的类型必须是索引值的子集
  [name: string]: number
}

const language: LanguageBirth = {
  "Java": 1995,
  "JavaScript": 1996,
  "C": 1972,
}

export {}
