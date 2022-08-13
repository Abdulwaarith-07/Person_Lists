import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const People = [
    {
      img: 22,
      name: "clark",
      job: "developer",
    },
    {
      img: 12,
      name: "bob",
      job: "writer",
    },
    {
      img: 30,
      name: "gerald",
      job: "footballer",
    },
  ];
  return (
    <section>
      <Person Person={People[0]} />
      <Person Person={People[1]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        adipisicing elit. A, harum!
      </Person>
      <Person Person={People[2]} />
    </section>
  );
};

const Person = (props) => {
  const { img, name, job } = props.Person;
  const { children } = props;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />

      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
