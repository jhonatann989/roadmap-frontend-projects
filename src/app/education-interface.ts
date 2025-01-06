export interface EducationInterface {
    Education:Array<SingleEducationInterface>
}

export interface SingleEducationInterface {
    Institute:String,
    Degree:String,
    From:String,
    To:String|"Today"
}
