import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from "./user.service";

describe('UserComponent', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    });
  });
  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should have the same user list than the user service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    expect(app.users).toEqual(userService.users);
  })
});
