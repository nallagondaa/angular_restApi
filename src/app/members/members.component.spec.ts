import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersComponent } from './members.component';
import { Team, Member } from '../../models/employee.model';
import { Observable } from 'rxjs';
import { TeamService } from '../team.service';

class MockTeamService {
  teams: Array<Team>;
  constructor() {
    this.teams = new Array<Team>();
    var team = new Team("Team 1", "VA", "rich");
    team.members = new Array<Member>();
    var member = new Member();
    member.firstName = "first";
    member.lastName = "last";
    member.role = "Technical Lead";
    team.members.push(member);
    this.teams.push(team);
  }
  getData(): Observable<Array<Team>> {
    return Observable.of(this.teams);
  }
}
describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersComponent]
      , providers: [
        { provide: TeamService, useClass: MockTeamService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should create', () => {
    var member = component.getmembers();
    expect(member).toBeTruthy();

  });
});
