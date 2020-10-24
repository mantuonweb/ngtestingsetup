import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asynccompt2Component, Hero } from './asynccompt2.component';

describe('Asynccompt2Component', () => {
  let component: Asynccompt2Component;
  let fixture: ComponentFixture<Asynccompt2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asynccompt2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asynccompt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('on button click status should be toggled', () => {
    let ele = fixture.nativeElement;
    let button = ele.querySelector('button');
    const hero: Hero = {id: 42, name: 'Test'};
    let selectedHero;
    component.hero = hero;
    component.selected.subscribe((sh: Hero) => {
      selectedHero  = sh;
    });
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(selectedHero).toBe(hero);
  });
});
