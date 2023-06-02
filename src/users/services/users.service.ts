import { NotFoundException, Injectable } from '@nestjs/common';
import { users } from '../entities/users.entities';
import { v4 as uuidv4 } from 'uuid';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dto';

@Injectable()
export class UsersService {
  private users: users[] = [
    {
      id: '3ee8a102-8c1d-4cf3-b8ab-5d6bd39404a3',
      firstName: 'Terry',
      lastName: 'Medhurst',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      username: 'atuny0',
      password: '9uQFF1Lh',
      birthDate: '2000-12-25',
      image: 'https://robohash.org/hicveldicta.png',
    },
    {
      id: '2fce6727-5be3-4744-bed5-f38f67c248d8',
      firstName: 'Sheldon',
      lastName: 'Quigley',
      age: 28,
      gender: 'male',
      email: 'hbingley1@plala.or.jp',
      phone: '+7 813 117 7139',
      username: 'hbingley1',
      password: 'CQutx25i8r',
      birthDate: '2003-08-02',
      image: 'https://robohash.org/doloremquesintcorrupti.png',
    },
    {
      id: 'f44dd3ed-8dbe-4af7-bf3b-33b2b152b02c',
      firstName: 'Terrill',
      lastName: 'Hills',
      age: 38,
      gender: 'male',
      email: 'rshawe2@51.la',
      phone: '+63 739 292 7942',
      username: 'rshawe2',
      password: 'OWsTbMUgFc',
      birthDate: '1992-12-30',
      image: 'https://robohash.org/consequunturautconsequatur.png',
    },
    {
      id: 'c1439213-d552-45c8-a4e4-4bb3b5824307',
      firstName: 'Miles',
      lastName: 'Cummerata',
      age: 49,
      gender: 'male',
      email: 'yraigatt3@nature.com',
      phone: '+86 461 145 4186',
      username: 'yraigatt3',
      password: 'sRQxjPfdS',
      birthDate: '1969-01-16',
      image: 'https://robohash.org/facilisdignissimosdolore.png',
    },
    {
      id: '01b71581-7f4f-4a33-b1d9-67b3569b92b5',
      firstName: 'Mavis',
      lastName: 'Schultz',
      age: 38,
      gender: 'male',
      email: 'kmeus4@upenn.edu',
      phone: '+372 285 771 1911',
      username: 'kmeus4',
      password: 'aUTdmmmbH',
      birthDate: '1968-11-03',
      image: 'https://robohash.org/adverovelit.png',
    },
    {
      id: 'd19f4959-21ef-4ae5-98f3-015d1dd5a788',
      firstName: 'Alison',
      lastName: 'Reichert',
      age: 21,
      gender: 'female',
      email: 'jtreleven5@nhs.uk',
      phone: '+351 527 735 3642',
      username: 'jtreleven5',
      password: 'zY1nE46Zm',
      birthDate: '1969-07-21',
      image: 'https://robohash.org/laboriosamfacilisrem.png',
    },
    {
      id: '4014498e-1383-49d7-ac5b-e11ba059aab0',
      firstName: 'Oleta',
      lastName: 'Abbott',
      age: 31,
      gender: 'female',
      email: 'dpettegre6@columbia.edu',
      phone: '+62 640 802 7111',
      username: 'dpettegre6',
      password: 'YVmhktgYVS',
      birthDate: '1982-02-21',
      image: 'https://robohash.org/cupiditatererumquos.png',
    },
    {
      id: 'e825a261-b92c-4cf5-8eb6-991d6a461a07',
      firstName: 'Ewell',
      lastName: 'Mueller',
      age: 29,
      gender: 'male',
      email: 'ggude7@chron.com',
      phone: '+86 946 297 2275',
      username: 'ggude7',
      password: 'MWwlaeWcOoF6',
      birthDate: '1964-08-24',
      image: 'https://robohash.org/quiaharumsapiente.png',
    },
    {
      id: 'fe28839c-f89d-4034-96e1-09b82ee1fd65',
      firstName: 'Demetrius',
      lastName: 'Corkery',
      age: 22,
      gender: 'male',
      email: 'nloiterton8@aol.com',
      phone: '+86 356 590 9727',
      username: 'nloiterton8',
      password: 'HTQxxXV9Bq4',
      birthDate: '1971-03-11',
      image: 'https://robohash.org/excepturiiuremolestiae.png',
    },
    {
      id: '09654621-3188-4062-9c61-84ddb6c764a5',
      firstName: 'Eleanora',
      lastName: 'Price',
      age: 37,
      gender: 'female',
      email: 'umcgourty9@jalbum.net',
      phone: '+60 184 408 0824',
      username: 'umcgourty9',
      password: 'i0xzpX',
      birthDate: '1958-08-11',
      image: 'https://robohash.org/aliquamcumqueiure.png',
    },
  ];

  create(payload: CreateUsersDto) {
    if (payload) {
      const newUser = {
        id: uuidv4(),
        ...payload,
      };
      this.users.push(newUser);
      return newUser;
    }
    return null;
  }

  findAll() {
    return this.users;
  }

  findById(id: string) {
    const user = this.users.find((p) => p.id === id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  update(id: string, payload: UpdateUsersDto) {
    const user = this.findById(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: string) {
    const index = this.users.findIndex((i) => i.id === id);

    if (index === -1) {
      throw new NotFoundException(`User ${id} does not exist)`);
    }
    this.users.splice(index, 1);

    return this.users;
  }
}
