import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface company {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  companies: company[] = [
    {value: 'Yes', viewValue: 'at a registered school'},
    {value: 'Supplementary exam', viewValue: 'writing a supplementary exam'}
  ];
  isSelected: boolean=false;
  Yes: Boolean | undefined;

  get(data: { value: string; }){
    this.isSelected = true;
    if(data.value == 'Yes'){
      this.Yes = true;
    } else if(data.value =='Supplementary exam'){
      this.isSelected = false;
      this.Yes = false;
    }
    else{
    }
  }


  formModel: FormGroup;


  constructor(private fb: FormBuilder,private router: Router,private auth: AuthService) { }

  ngOnInit() {

    this.formModel = this.fb.group({
      FirstName: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', Validators.required],
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
