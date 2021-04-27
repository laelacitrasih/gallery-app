import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAddUpdateComponent } from './photo-add-update.component';

describe('PhotoAddUpdateComponent', () => {
  let component: PhotoAddUpdateComponent;
  let fixture: ComponentFixture<PhotoAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
