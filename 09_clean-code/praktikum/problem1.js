class user {
    constructor( id ) {
      this.id = id;
    }
    present() {
        return 'My Id ' + this.id;
    }
}

class userservice extends user {
    constructor(id, userid, password) {
        super(id);
        this.username = userid;
        this.password = password;
    }
    show() {
        return this.present() + ', my username ' + this.username + ', my password ' + this.password;
    }
}

myuserid = new userservice('123123', 'arifrahman', 'alta123');
console.log(myuserid.show());