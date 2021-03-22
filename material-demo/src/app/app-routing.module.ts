import { TextFieldComponent } from './text-field/text-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CardComponent } from './card/card.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { BedgeComponent } from './bedge/bedge.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/button', pathMatch: 'full'},
  { path: 'button', component: ButtonComponent },
  { path: 'bedge', component: BedgeComponent },
  { path: 'card', component: CardComponent},
  { path: 'textfield', component: TextFieldComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'buttontoggle', component: ButtontoggleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
