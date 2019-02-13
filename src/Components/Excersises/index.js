import React, { Fragment } from 'react';
import {
	Grid,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText
} from '@material-ui/core';

const styles = {
	Paper: {
		padding: 20,
		marginTop: 16,
		marginBottom: 16,
		height: 500,
		overflowY: 'auto'
	}
};

export default ({ 
  excersises, 
  category, 
  onSelect, 
  excersise: {
    id, 
    title = 'Welcome!', 
    description = 'Please select an excersise from the list on the left.'
  } 
}) => 
	<Grid container spacing={16}>
		<Grid item sm>
			<Paper style={styles.Paper}>
				{excersises.map(([group, excersises]) => 
          !category || category === group
            ? <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="ul">
                  {excersises.map(({ id, title }) => (
                    <ListItem 
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                      <ListItemText 
                      primary={title} 
                    />
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
				<Typography variant="display1">{title}</Typography>
				<Typography variant="subheading">{description}</Typography>
			</Paper>
		</Grid>
	</Grid>
