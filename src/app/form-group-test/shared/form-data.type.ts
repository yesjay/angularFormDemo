export class FormData {
  public id: number;
  public name: string;
  public power: string;
  public alterEgo: string;
  constructor(
    {
      id = 0,
      name = '',
      power = '',
      alterEgo = '',
    }
  ={}) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;
   }
}
