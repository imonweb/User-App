import React, { useState } from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"
import classes from "./AddUser.module.css"
// import PropTypes from 'prop-types'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")

  const addUserHandler = (event) => {
    event.preventDefault()
    // Validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    // enteredAge is a string, to make it a number you have to add + symbol at front.
    if (+enteredAge < 1) {
      return
    }
    console.log(enteredUsername, enteredAge)
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername("")
    setEnteredAge("")
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

// AddUser.propTypes = {}

export default AddUser
