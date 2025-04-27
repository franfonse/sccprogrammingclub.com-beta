import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersActiveComponent } from './members-active.component';

describe('MembersActiveComponent', () => {
  let component: MembersActiveComponent;
  let fixture: ComponentFixture<MembersActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersActiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
