import {Injectable} from "@angular/core";
@Injectable()
export class UserService{
    users = [
        {name: 'Eduardo', age: 27},
        {name: 'Freddy', age: 20}
    ];
    getUsers(){
        return this.users;
    }
}