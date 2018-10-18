export class User {
  sequence: number;
  id: string;
  name: string;
  gender: string;
  birthday: Date;
  homePhone: string;
  physicalConditions: PhysicalConditions;

  constructor({
    sequence = null,
    id = '',
    name = '',
    gender = '',
    birthday = null,
    homePhone = '',
    physicalConditions = {weight: null, height: null},
  } = {}){
    this.sequence = sequence;
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.homePhone = homePhone;
    this.physicalConditions = physicalConditions;
  }
}

export class PhysicalConditions {
  weight: number;
  height: number;
}

export const users: Array<User> = [
  {
    sequence: 1,
    id: 'user1',
    name: 'user1',
    gender: 'man',
    birthday: new Date(1989, 1, 1),
    homePhone: '0900000000',
    physicalConditions: {
      weight: 66,
      height: 170,
    },
  },
  {
    sequence: 2,
    id: 'user2',
    name: 'user2',
    gender: 'female',
    birthday: new Date(1980, 4, 1),
    homePhone: '0900000000',
    physicalConditions: {
      weight: 46,
      height: 160,
    }
  },
  {
    sequence: 3,
    id: 'user3',
    name: 'user3',
    gender: 'man',
    birthday: new Date(1979, 5, 1),
    homePhone: '0900000000',
    physicalConditions: {
      weight: 76,
      height: 180,
    }
  }
]
