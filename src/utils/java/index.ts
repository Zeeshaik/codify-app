import { Java } from "@/utils/types/problem"
import { introduction } from "./introduction";

interface ProblemMap {
	[key: string]:Java;
}

export const java: ProblemMap = {
    "introduction": introduction,
}