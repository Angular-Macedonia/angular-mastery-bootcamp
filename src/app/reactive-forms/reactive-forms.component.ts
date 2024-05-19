import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { debounce, debounceTime, filter } from 'rxjs';
import { ConfirmEmailDirective } from '../confirm-email.directive';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    this.form.get('firstName')?.valueChanges.pipe(
      debounceTime(300),
      filter((value: string) => value.length > 2)
    ).subscribe((value) => {
      console.log(value);
    })
  }

  form = this.initForm

  get initForm(): FormGroup {
    return this.formBuilder.group(
      {
        firstName: new FormControl('angel', [Validators.required, Validators.pattern("[0-9]*")]),
        lastName: new FormControl('petrushevski'),
        address: new FormControl('test address'),
        email: this.formBuilder.group({
          email: new FormControl('email@test.com'),
          confirmEmail: new FormControl('email@test.com'),
        }, {
          validators: [
            customValidator
          ]
        })
      }
    )
  }
}

const customValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  console.log(control);
    return null;
}
