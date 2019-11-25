export class Poll {
    constructor(
        public answers: Answer[],
        public creatorID: number,
        public name: String,
        public participants: Object[],
        public pollID: number
    ) {}
}

export class Answer {
    constructor(
        public answerID: number,
        public text: String,
        public pollID: number,
        public votes: Votes[]
    ) {}
}

export class Votes {
    constructor(
        public voteID: number,
        public answerID: number,
        public userID: number
    ) {

    }
}