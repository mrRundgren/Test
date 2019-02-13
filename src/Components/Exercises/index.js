import React, { Fragment } from 'react';
import {
	Grid,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import {
  Delete, Edit
} from '@material-ui/icons'
import Form from './Form'

const styles = {
	Paper: {
		padding: 20,
		marginTop: 16,
		marginBottom: 16,
		height: 300,
		overflowY: 'auto'
	}
};

export default ({ 
  muscles,
  exercises, 
  category, 
  editMode,
  onSelect, 
  exercise,
  exercise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an exercise from the list on the left.'
  },
  onDelete,
  onSelectEdit,
  onEdit
}) => 
	<Grid container spacing={16}>
		<Grid item sm>
			<Paper style={styles.Paper}>
				{exercises.map(([group, exercises]) => 
          !category || category === group
            ? <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: 'capitalize' }} noWrap>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem 
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                      <ListItemText 
                      primary={title} 
                    />
                    <ListItemSecondaryAction>
                      <IconButton 
                      onClick={() => onSelectEdit(id)}
                    >
                        <Edit/>
                      </IconButton>
                      <IconButton
                        onClick={() => onDelete(id)}
                      >
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            : null
				)}
			</Paper>
		</Grid>
		<Grid item sm>
			<Paper style={styles.Paper}>
        {editMode
          ? <Form 
              muscles={muscles}
              onSubmit={onEdit}
              exercise={exercise}
            />
          : <Fragment>
            <Typography variant="display1">{title}</Typography>
            <Typography variant="subheading">{description}</Typography> 
          </Fragment>
        }
			</Paper>
		</Grid>
	</Grid>
