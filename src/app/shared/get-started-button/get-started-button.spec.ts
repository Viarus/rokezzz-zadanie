import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedButton } from './get-started-button';

describe('GetStartedButton', () => {
  let component: GetStartedButton;
  let fixture: ComponentFixture<GetStartedButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStartedButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStartedButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
