import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FfTestPageRoutingModule } from '@app/ff-test-page/ff-test-page-routing.module';
import { FfTestPageComponent } from '@app/ff-test-page/ff-test-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FfTestPageRoutingModule
  ],
  declarations: [
    FfTestPageComponent
  ]
})
export class FfTestPageModule { }
