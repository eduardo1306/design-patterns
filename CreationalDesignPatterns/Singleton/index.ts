import { Human } from './Human';

let eduardo = Human.instance;

eduardo.age = 25; // working as well
eduardo.height = 1.92; // working as well
eduardo.weight = 95; // working as well

let joao = new Human();
joao.height = 1.88; // Ops! We have a violation of Singleton Design Pattern!
