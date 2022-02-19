export const people = [
    {
        id: 0,
        name: "kim",
        age: 20,
        gender: "male"
    },
    {
        id: 1,
        name: "park",
        age: 21,
        gender: "female"
    },
    {
        id: 2,
        name: "lee",
        age: 22,
        gender: "male"
    },
    {
        id: 3,
        name: "choi",
        age: 23,
        gender: "female"
    },
    {
        id: 4,
        name: "son",
        age: 24,
        gender: "male"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
};
