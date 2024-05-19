import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmEmail]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEmailDirective,
      multi: true
    }
  ]
})
export class ConfirmEmailDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);
    const email = control.get('email')?.value;
    const confirmEmail = control.get('confirm-email')?.value;
    if(email === confirmEmail) {
      return null;
    }
    return {
      'confirm-email-error': "Your emails does not match"
    };
  }


    registerOnValidatorChange?(fn: () => void): void {

    }

}
