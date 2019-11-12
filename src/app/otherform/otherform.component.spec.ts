import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherformComponent } from './otherform.component';

describe('OtherformComponent', () => {
  let component: OtherformComponent;
  let fixture: ComponentFixture<OtherformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
