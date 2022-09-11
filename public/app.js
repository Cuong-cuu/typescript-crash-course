import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
//form
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: 'kou', age: 40 });
const docFive = {
    uid: 23,
    resourceName: 'person',
    data: 12
};
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docSix = {
    uid: 32,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docSeven = {
    uid: 32,
    resourceType: ResourceType.AUTHOR,
    data: { name: 'yoshi' }
};
//Tuples
let tup = ['ryiou', 32, true];
