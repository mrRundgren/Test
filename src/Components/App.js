import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Excersises from './Excersises';
import { muscles, excersises } from '../store';

export default class extends Component {
	state = {
		excersises,
    excersise: {}
	};

	getExcersisesByMuscle() {
		return Object.entries(
			this.state.excersises.reduce((excersises, excersise) => {
				const { muscles } = excersise;
				excersises[muscles] = excersises[muscles]
					? [...excersises[muscles], excersise]
					: [excersise];

				return excersises;
			}, {})
		);
	}

	handleCategorySelected = category => {
		this.setState({
      category
    });
	};

  handleExcersiseSelected = id => {
    this.setState(({excersises}) => ({
      excersise: excersises.find(ex => ex.id === id)
    }));
  };

	render() {
		const excersises = this.getExcersisesByMuscle(),
      { category, excersise } = this.state;
		return (
			<Fragment>
				<Header />
        <Excersises 
          excersise={excersise}
          category={category} 
          excersises={excersises} 
          onSelect={this.handleExcersiseSelected}
        />
				<Footer
					category={category}
					onSelect={this.handleCategorySelected}
					muscles={muscles}
				/>
			</Fragment>
		);
	}
}
