export class User {
    constructor(
        public userID: number, 
        public email: string, 
        public username: string, 
        public password: string,
        public token: string) 
        {}
}
