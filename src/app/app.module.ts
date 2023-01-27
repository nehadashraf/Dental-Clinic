import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ListdoctorsComponent } from './Doctors/listdoctors/listdoctors.component';
import { ShowdoctorComponent } from './Doctors/showdoctor/showdoctor.component';
import { FormComponent } from './Patients/form/form.component';
import { ListpatientsComponent } from './Patients/listpatients/listpatients.component';
import { CreatedoctorComponent } from './Doctors/createdoctor/createdoctor.component';
import { UpdatedoctorComponent } from './Doctors/updatedoctor/updatedoctor.component';
import { ShowPatientComponent } from './Patients/show-patient/show-patient.component';
import { UpdatePatientComponent } from './Patients/update-patient/update-patient.component';
import { CreateEmployeeComponent } from './Employess/create-employee/create-employee.component';
import { ListEmployeesComponent } from './Employess/list-employees/list-employees.component';
import { ShowEmployeeComponent } from './Employess/show-employee/show-employee.component';
import { UpdateEmployeesComponent } from './Employess/update-employees/update-employees.component';
import { ShowServiceComponent } from './clinicServices/show-service/show-service.component';
import { ListServicesComponent } from './clinicServices/list-services/list-services.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContactComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ListdoctorsComponent,
    ShowdoctorComponent,
    FormComponent,
    ListpatientsComponent,
    CreatedoctorComponent,
    UpdatedoctorComponent,
    ShowPatientComponent,
    UpdatePatientComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    ShowEmployeeComponent,
    UpdateEmployeesComponent,
    ShowServiceComponent,
    ListServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
