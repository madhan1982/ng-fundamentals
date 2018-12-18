import { Component } from "@angular/core";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    userName;
    password;

    login(formValue1){
        console.log(formValue1);
        console.log(formValue1.userName)
    }

}