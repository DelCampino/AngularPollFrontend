export class Poll {
    constructor(
        public name: String,
        public creatorID: number,
        public participants: participant[],
        public answers: votes[]
    ) {}

}

export class participant {
    public userID: number
}

export class votes {
    public text: string
}