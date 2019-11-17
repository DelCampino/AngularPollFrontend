export class Friendslist {
    constructor(
        public friendListID: number,
        public userID: number,
        public FriendID: number,
        public email: String,
        public user: object,
        public friend: object,
        public status: boolean
    ) { }
}
