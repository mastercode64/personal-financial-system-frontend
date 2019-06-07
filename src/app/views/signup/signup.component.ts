import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidation } from 'src/app/_helpers/password-validation';
import { AccountService } from 'src/app/_services/account.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService) {

    }
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(1)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
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

        let name = this.f.name.value;
        let email = this.f.email.value;
        let ps = this.f.password.value;

        this.accountService.createAccount(name, email, ps);
    }

}

