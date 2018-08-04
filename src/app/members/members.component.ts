import { Component, OnInit } from '@angular/core';
import { Team, Member } from '../../models/employee.model'
import { TeamService } from '../team.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  teams: Array<Team>;

  constructor(private _serv: TeamService) {

  }
  ngOnInit() {
    this.getmembers()
  }
  filterTeam(teams: Array<Team>, state: string) {
    return teams.filter((team: Team, index: number, array: Team[]) => { return team.state === state; });
  }
  filterRole(teams: Array<Team>) {
    teams.forEach((team: Team, index: number, array: Team[]) => {

      team.members = team.members.filter((member: Member, index: number, array: Member[]) => {
        if (member.role === 'Technical Lead' || member.role === 'Software Engineer') {
          member.fullName = member.firstName + ' ' + member.lastName;
          return member;
        }
      }).sort((a: Member, b: Member) => {
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;
        if (a.lastName === b.lastName) {
          if (a.firstName < b.firstName) return -1;
          if (a.firstName > b.firstName) return 1;

        }
      });


    });
    return teams;
  }

  getmembers() {
    this._serv.getData().subscribe(
      data => {
        this.teams = this.filterTeam(data, 'VA');
        this.teams = this.filterRole(this.teams);
      });
  }
}


