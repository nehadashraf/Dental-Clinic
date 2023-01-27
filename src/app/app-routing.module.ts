import { ListServicesComponent } from './clinicServices/list-services/list-services.component';
import { ShowServiceComponent } from './clinicServices/show-service/show-service.component';
import { UpdateEmployeesComponent } from './Employess/update-employees/update-employees.component';
import { ShowEmployeeComponent } from './Employess/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './Employess/create-employee/create-employee.component';
import { ListEmployeesComponent } from './Employess/list-employees/list-employees.component';
import { ShowPatientComponent } from './Patients/show-patient/show-patient.component';
import { UpdatePatientComponent } from './Patients/update-patient/update-patient.component';
import { UpdatedoctorComponent } from './Doctors/updatedoctor/updatedoctor.component';
import { CreatedoctorComponent } from './Doctors/createdoctor/createdoctor.component';
import { ListpatientsComponent } from './Patients/listpatients/listpatients.component';
import { FormComponent } from './Patients/form/form.component';
import { ShowdoctorComponent } from './Doctors/showdoctor/showdoctor.component';
import { ListdoctorsComponent } from './Doctors/listdoctors/listdoctors.component';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { ContactComponent } from './main/contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //UI Routes
{path:"",component:SignupComponent},
{path:"home",component:HeroComponent},
{path:"services",component:ListServicesComponent},
{path:"showService/:id",component:ShowServiceComponent},
{path:"contact",component:ContactComponent},
//patient
{path:"patients",component:ListpatientsComponent},
{path:"createPatient",component:FormComponent},
{path:"showPatient/:id",component:ShowPatientComponent},
{path:"updatePatient/:id",component:UpdatePatientComponent},
//Doctor
{path:"doctors",component:ListdoctorsComponent},
{path:"createDoctor",component:CreatedoctorComponent},
{path:"showdoctor/:id",component:ShowdoctorComponent},
{path:"updateDoctor/:id",component:UpdatedoctorComponent},
//employee
{path:"employees",component:ListEmployeesComponent},
{path:"createEmployee",component:CreateEmployeeComponent},
{path:"showEmployee/:id",component:ShowEmployeeComponent},
{path:"updateEmployee/:id",component:UpdateEmployeesComponent},
//users
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
//notFound
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
