import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersInactiveComponent } from './members-inactive.component';

describe('MembersInactiveComponent', () => {
  let component: MembersInactiveComponent;
  let fixture: ComponentFixture<MembersInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersInactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
