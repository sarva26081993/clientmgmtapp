import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdisplayComponent } from './clientdisplay.component';

describe('ClientdisplayComponent', () => {
  let component: ClientdisplayComponent;
  let fixture: ComponentFixture<ClientdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientdisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
