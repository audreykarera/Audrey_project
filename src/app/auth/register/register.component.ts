import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  formModel: FormGroup;


  constructor(private fb: FormBuilder,private router: Router,private auth: AuthService) { }

  ngOnInit() {

    this.formModel = this.fb.group({
      FirstName: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', Validators.email],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords })

    });
  }
  onSubmit() {


    if(this.formModel.valid)
    {
      this.auth.register(this.formModel.value).subscribe(
        (res: any) => {
            this.formModel.reset();
            this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      );

    }

  }
  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }
}
