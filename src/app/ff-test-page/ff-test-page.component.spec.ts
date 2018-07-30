import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfTestPageComponent } from '@app/ff-test-page/ff-test-page.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { CoreModule } from '@app/core';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';

describe('FfTestPageComponent', () => {
  let component: FfTestPageComponent;
  let fixture: ComponentFixture<FfTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        CoreModule
      ],
      declarations: [ FfTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
