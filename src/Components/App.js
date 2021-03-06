import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';
import {
  CssBaseline
} from '@material-ui/core';

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscle() {
    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise]
        return exercises;
      }, initialExercises)
    );
  };

  handleCategorySelect = category =>
    this.setState({
      category
    });

  handleExerciseCreate = exersice =>
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises,
        exersice
      ]
    }))
  
  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));

  handleExerciseDelete = id =>
    this.setState(({exercises, exercise, editMode}) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))

  handleExerciseSelectEdit = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise => 
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise, editMode } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <Header 
          muscles={muscles} 
          onExerciseCreate={this.handleExerciseCreate} 
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
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