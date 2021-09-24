const person1 = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

const person2 = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

function intersect(o1, o2){
    return Object.entries(o1).filter(k => k in o2.values)
}

console.log(intersect(person1, person2));
//todo