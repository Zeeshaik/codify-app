export interface QuizData {
    question: string;
    options: string[];
    answer: number;
    completed: boolean;
};

 const quizPrblm: QuizData[] = [
    {
        question: "What's a programming language ?",
        options: ["A language used by machines to communicate with aliens", "A language used by programmers to communicate with machines", "A language used by programmers to communicate with humans", "A language used by machines to communicate with animals"],
        answer: 2,
        completed : false,
    },
    {
        question: "Notification and text displayed on a screen are exampes of outputs from computer programs ?",
        options:["false" , "true"],
        answer: 2,
        completed : false,
    },
    {
        question: "Each statement needs to end with a ?",
        options:["Angle bracket >" , "Semicolon ;"],
        answer: 2,
        completed : false,
    }
]

export default quizPrblm;