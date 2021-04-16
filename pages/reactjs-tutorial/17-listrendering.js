import Person from './person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      My index value is {index} and my name is {name}
    </h2>
  ));
  return (
    <div>
      {nameList} {personList}
    </div>
  );
}

export default NameList;
