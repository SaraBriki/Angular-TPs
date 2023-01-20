export class Person {
  lastName: string = '';
  firstName: string = '';
  age: number = 0;
  imagePath: string = '';
  job: string = '';
  id: number = 0;

  constructor(data: Partial<Person> = {}) {
    this.id = data.id ?? 0;
    this.lastName = data.lastName ?? '';
    this.firstName = data.firstName ?? '';
    this.age = data.age ?? 0;
    this.job = data.job ?? '';
    this.imagePath = data.imagePath ?? '';
  }
}
