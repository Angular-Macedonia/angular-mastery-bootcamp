import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModelGroup, ValidationErrors } from '@angular/forms';
import { ConfirmEmailDirective } from '../confirm-email.directive';
import { JsonPipe } from '@angular/common';

interface CreateOrder {
  firstName: string,
  lasName: string,
  address: string,
  userEmail: string,
  confirmUserEmail: string,
}

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [
    FormsModule,
    ConfirmEmailDirective,
    JsonPipe
  ],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.scss'
})
export class TemplateFormsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.form)

  }

  initialValues: CreateOrder | undefined;

  order: CreateOrder = {
    firstName: 'angel',
    lasName: 'petrushevski',
    address: 'test address',
    userEmail: 'angel@test.com',
    confirmUserEmail: 'angel@test.com'
  }

  ngOnInit(): void {
      this.initialValues = {...this.order};
  }

  @ViewChild("form") form!: NgForm;

  onSubmit() {
    console.log(this.form.value as CreateOrder);
  }

  onReset() {
    console.log(this.initialValues)
    this.order = {...this.initialValues!}
    // this.form.resetForm({...this.initialValues});
  }

  displayConfirmEmailError(group: NgModelGroup) {
    if ((group.errors as ValidationErrors)) {
      return (group.errors as ValidationErrors)['confirm-email-error'];
    }
    return '';
  }

}
