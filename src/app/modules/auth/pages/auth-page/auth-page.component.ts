import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  standalone: false,
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{
  errorSesion: boolean = false
  formLogin: FormGroup = new FormGroup({})

  constructor(private authService: AuthService, private cookie: CookieService, private router: Router){}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }
  
  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
    //TODO: 200<400
    .subscribe({ //TODO: 
      next: responseOk => {
        const token = responseOk.idToken
        console.log('Sesion iniciada correcta', responseOk);
        this.cookie.set('token', token, 4, '/')
        this.router.navigate(['/', 'recipe'])
      },
      error: err => {
        this.errorSesion = true;
        console.log('Ocurrió error con tu email o password', err);
      }
    }) 
  }
  //ngOnDestroy(): void {
    //this.listObservers$.forEach( u => u.unsubscribe())
    //console.log('BOOMMMMM media-playes.component.tssssssss!');
  //}
}
