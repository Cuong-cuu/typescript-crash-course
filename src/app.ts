import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
});

//Generics
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docThree = addUID({name: 'kou', age: 40});

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docFive: Resource<number> = {
    uid: 23,
    resourceName: 'person',
    data: 12
}

//Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource2<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docSix: Resource2<object> = {
    uid: 32,
    resourceType: ResourceType.BOOK,
    data: {title: 'name of the wind'}
}

const docSeven: Resource2<object> = {
    uid: 32,
    resourceType: ResourceType.AUTHOR,
    data: {name: 'yoshi'}
}

//Tuples

let tup: [string, number, boolean] = ['ryiou', 32, true];