export class Poll {
    constructor(
        public name: String,
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