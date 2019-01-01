function login_required(construtct: Function) {
    const user = new User("root","root");
    construtct.prototype.show = function() {
        if (user.isAuthorized()) {
            console.log(this.info);
        } else {
            console.log("You are not authorized");
        }  
    }
}

class User {
    login: string;
    password: string;

    constructor (login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    isAuthorized(): boolean {
        return true;
    }
}

@login_required
class Page {
    info: string;

    constructor (info: string) {
        this.info = info;
    }
}

let page = new Page("something");
(<any>page).show()