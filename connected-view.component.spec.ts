import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedViewComponent } from './connected-view.component';

describe('ConnectedViewComponent', () => {
  let component: ConnectedViewComponent;
  let fixture: ComponentFixture<ConnectedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
