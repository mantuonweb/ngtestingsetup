import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compt1Component } from './compt1.component';

describe('Compt1Component', () => {
  let component: Compt1Component;
  let fixture: ComponentFixture<Compt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('on button click status should be toggled', () => {
    let ele = fixture.nativeElement;
    let button = ele.querySelector('button');
    let span = ele.querySelector('span');
    component.ngOnInit();
    expect(span.textContent).toBe("The light is Off");
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(span.textContent).toBe("The light is On");
  });
});
