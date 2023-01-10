import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsNewComponent } from './moments-new.component';

describe('MomentsNewComponent', () => {
  let component: MomentsNewComponent;
  let fixture: ComponentFixture<MomentsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
