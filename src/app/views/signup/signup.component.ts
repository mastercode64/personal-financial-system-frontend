import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidation } from 'src/app/_helpers/password-validation';

@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder) {

    }
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            passwordConfirmation: ['', [Validators.required]]
        },
            {
                validator: PasswordValidation.MatchPassword
            }
        );
    }

    get f() { return this.signupForm.controls; }

    onSubmit() {

        if(this.signupForm.invalid){
            return;
        }

        let email = this.signupForm.controls.email.value;
        let ps = this.signupForm.controls.password.value;
        let psConfirmation = this.signupForm.controls.passwordConfirmation.value;

        console.log(this.f.email.errors);
    }

}

