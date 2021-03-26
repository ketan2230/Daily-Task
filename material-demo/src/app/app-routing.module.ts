import { DialogComponent } from './dialog/dialog.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ChipsComponent } from './chips/chips.component';
import { OtherComponent } from './other/other.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { DividerComponent } from './divider/divider.component';
import { UserDetailsComponent } from './module/user/user-details/user-details.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CardComponent } from './card/card.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { BedgeComponent } from './bedge/bedge.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';


const routes: Routes = [
  { path: '', redirectTo: '/navbar', pathMatch: 'full'},
  { path: 'button', component: ButtonComponent },
  { path: 'bedge', component: BedgeComponent},
  { path: 'card', component: CardComponent},
  // { path: 'dialog', component: DialogComponent},
  { path: 'list', component: ListComponent},
  { path: 'chips', component: ChipsComponent},
  { path: 'datepicker', component: DatepickerComponent},
  { path: 'bottomsheet', component: BottomsheetComponent},
  { path: 'other', component: OtherComponent},
  { path: 'paginator', component: PaginatorComponent},
  { path: 'progressbar', component: ProgressBarComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'autocomplete', component: AutocompleteComponent},
  { path: 'gridlist', component: GridListComponent},
  { path: 'divider', component: DividerComponent},
  { path: 'user', component: UserDetailsComponent},
  { path: 'textfield', component: TextFieldComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'buttontoggle', component: ButtontoggleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
