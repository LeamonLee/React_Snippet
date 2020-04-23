import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercise from './Exercises'
import { muscles, exercises } from './store.js'

class App extends Component {

  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  render() {

    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state

    return (
      <Fragment>
        <Header/>
        
        <Exercise
        exercise={exercise}
        category={category}
        exercises={exercises}
        onSelect={this.handleExerciseSelected}
      />

      <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}
      />
      </Fragment>
    )
  }
}

export default App
