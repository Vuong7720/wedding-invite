import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingInfoComponentComponent } from './wedding-info-component.component';

describe('WeddingInfoComponentComponent', () => {
  let component: WeddingInfoComponentComponent;
  let fixture: ComponentFixture<WeddingInfoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingInfoComponentComponent]
    });
    fixture = TestBed.createComponent(WeddingInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
