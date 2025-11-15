import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWithDescription } from './photo-with-description';

describe('PhotoWithDescription', () => {
  let component: PhotoWithDescription;
  let fixture: ComponentFixture<PhotoWithDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoWithDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoWithDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
