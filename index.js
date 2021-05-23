const peoples = { id: 1, persona: "Israel" };
const Person = (name) =>
  name === peoples.persona
    ? `Eita ${name} você e boiola`
    : `Eita ${name} você e Macho`;
console.log(Person("Isaque"));
