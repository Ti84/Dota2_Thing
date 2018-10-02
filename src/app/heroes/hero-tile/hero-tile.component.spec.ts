/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroTileComponent } from './hero-tile.component';

describe('HeroTileComponent', () => {
  let component: HeroTileComponent;
  let fixture: ComponentFixture<HeroTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
