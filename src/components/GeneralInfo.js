import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import GeneralInfoForm from './GeneralInfoForm';

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2rem',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
});

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: 'John',
      lName: 'Smith',
      email: 'smith@email.com',
      phone: '01 800 123 4567',
      isEditing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEdit();
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const { fName, lName, email, phone, isEditing } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        {isEditing ? (
          <GeneralInfoForm
            fName={fName}
            lName={lName}
            email={email}
            phone={phone}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div className={classes.root}>
            <Avatar className={classes.avatar} />
            <Typography component="h1" variant="h5" gutterBottom>
              {fName} {lName}
            </Typography>
            <Typography gutterBottom>{email}</Typography>
            <Typography gutterBottom>{phone}</Typography>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GeneralInfo);
