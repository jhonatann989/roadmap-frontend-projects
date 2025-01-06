import { SingleSkill } from "./skills-interface"
export interface ExperienceInterface {
    Experience: Array<SingleExperienceInterface>
}

export interface SingleExperienceInterface {
    Company:String,
    Position:String,
    From:String,
    To:String|"Today"
    LearnedSkills: Array<SingleSkill>
}
