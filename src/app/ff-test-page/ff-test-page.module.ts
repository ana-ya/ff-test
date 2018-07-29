import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfTestPageRoutingModule } from '@app/ff-test-page/ff-test-page-routing.module';
import { FfTestPageComponent } from '@app/ff-test-page/ff-test-page.component';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FfTestPageRoutingModule
  ],
  declarations: [
    FfTestPageComponent
  ]
})
export class FfTestPageModule { }
