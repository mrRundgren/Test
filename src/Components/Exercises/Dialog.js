import React, { Component, Fragment}  from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Form from './Form'

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  }

  render() {
    const {open} = this.state,
          {muscles} = this.props
      
    return <Fragment>
      <IconButton onClick={this.handleToggle} color="inherit">
        <Add />
      </IconButton>
      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
        <DialogTitle>Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <Form
            muscles={muscles}
            onSubmit={this.handleFormSubmit}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  }
}
 