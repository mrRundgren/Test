import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseCreate = exersice => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises,
        exersice
      ]
    }))
  };

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header 
          muscles={muscles} 
          onExerciseCreate={this.handleExerciseCreate} 
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          category={category}
          onSelect={this.handleCategorySelect}
          muscles={muscles}
        />
      </Fragment>
    );
  }
}