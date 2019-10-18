import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadQnaComponent } from './upload-qna.component';

describe('UploadQnaComponent', () => {
  let component: UploadQnaComponent;
  let fixture: ComponentFixture<UploadQnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadQnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
