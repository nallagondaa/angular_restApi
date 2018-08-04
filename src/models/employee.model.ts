

export class Team {
name : string;
city : string;
state:string;
members : Array<Member>;
/**
 *
 */
constructor(name :string, city :string, state : string) {
      this.name= name;
      this.city=city;
      this.state=state;  
}
}

export class Member {
firstName :string ;
lastName:string ;
role :string;
fullName : string;
} 