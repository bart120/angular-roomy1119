import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialSharedModule
  ]
})
export class AuthenticationModule { }
