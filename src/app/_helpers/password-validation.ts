import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password1: string = "password";
        let password2: string = "passwordConfirmation";

        let password = AC.get(password1).value;
        let confirmPassword = AC.get(password2).value;
        if (password != confirmPassword) {
            AC.get(password2).setErrors({ MatchPassword: true });
        } else {
            return null;
        }
    }
}