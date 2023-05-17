import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemImageDetailsComponent } from './blog-item-image-details.component';

describe('BlogItemImageDetailsComponent', () => {
  let component: BlogItemImageDetailsComponent;
  let fixture: ComponentFixture<BlogItemImageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogItemImageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogItemImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
