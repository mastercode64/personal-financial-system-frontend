import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: [
        './signup.component.css'
    ]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder) {

    }
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required]
        });
    }

    onSubmit(e){

        if(this.signupForm.invalid){
            return;
        }
        console.log('submit event')

        let email = this.signupForm.controls.email.value;
        let ps = this.signupForm.controls.password.value;
        let psConfirmation = this.signupForm.controls.passwordConfirmation.value;

        console.log(email, ps, psConfirmation);
    }

}