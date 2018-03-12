import { Component } from 'react';
import { connect } from 'react-redux';
import Planet from '../../components/Planet';

const calcWidth = (index, count) => {
  let width = count * 100 - index * 10;
  return (width + 'px');
};

const planets = (props) => {
  let planetResults = [];
  if (props.data && props.data.length > 0) {
    const results = props.data.sort((a, b) => parseFloat(b.population) - parseFloat(a.population));
    const count = results.length;
    planetResults = results.map((planet, index) => <Planet customWidth={calcWidth(index, count)} key={index} {...planet} />);
  }
  return (
    <div>
      {planetResults}
    </div>
  );
};

export default planets;
