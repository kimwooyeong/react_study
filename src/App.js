import React from 'react';
import PropTypes from 'prop-types'; 

function Dev(props) {
  return <h1>Develop {props.nickname}</h1>
}

function Test({ name, description, rating }) {
  return <div>
    <h1>{name}</h1>
    <span>{description}</span><br/>
    <span>{rating}/5.0</span>
  </div>
}

Test.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

const testList = [
  {
    id:1,
    name: "a",
    description: "test_a",
    rating:5,
  },
  {
    id:2,
    name: "b",
    description: "test_b",
    rating:4,
  },
  {
    id:3,
    name: "c",
    description: "test_c",
    rating:3,
  },
]

function renderTest(test) {
  return <Test key={test.id} name={test.name} description={test.description} rating={test.rating} />;
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Dev name="kuy" nickname="kikaku"></Dev>
      <Dev name="kim" nickname="ww"></Dev>
      <Test description="description"></Test>
      {testList.map(renderTest)}
    </div>
  );
}

export default App;
