import React, { Component, Fragment}  from 'react'
import { withStyles, FormControl, InputLabel, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, TextField } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles) ( class extends Component {

  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({target: {value}}) => {
    this.setState({ 
      exersise: {
        ...this.state.exercise,
        [name]: value 
      }
    })
  }

  handleSubmit = () => {
    // TODO: validate
    const {exercise} = this.state;
    
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });
    
    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    });
  }

  render() {
    const {open, exercise: {title, description, muscles}} = this.state,
      { classes, muscles: categories } = this.props
    return <Fragment>
      <Button variant="fab" onClick={this.handleToggle} mini>
        <Add />
      </Button>
      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
        <DialogTitle>Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form>
            <TextField
              label="Title"
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
              className={classes.FormControl}
            />
            <br/>
            <FormControl className={classes.FormControl}>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={muscles}
                onChange={this.handleChange('muscles')}
              >
              {categories.map(category => 
                  <MenuItem value={category}>{category}</MenuItem>
              )}
              </Select>
            </FormControl>
            <br/>
            <TextField
              label="Description"
              value={description}
              multiline
              rows="4"
              onChange={this.handleChange('description')}
              margin="normal"
              className={classes.FormControl}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            color="primary" 
            variant="contained"
            onClick={this.handleSubmit}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
})
 