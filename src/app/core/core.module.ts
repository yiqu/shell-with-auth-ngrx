import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { MaterialModuleBundle } from '../shared/material-bundle.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleBundle,
    CoreRoutingModule,
  ],

  exports: [

  ],

  declarations: [
    CoreComponent
  ],

  providers: [

  ],
})
export class CoreModule { }
