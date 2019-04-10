import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Auth} from '../../Auth';
import {connect} from "react-redux";
import * as AuthActions from "../action";
import {browserHistory} from "react-router";
import {bindActionCreators} from "redux";
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        // fontSize: 50,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignUp3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModal: false,
        }
    }
    handleChange(event) {
        const field = event.target.name;
        const inputs = this.props.authReducer.loginRequest;
        inputs[field] = event.target.value;

        this.props.setUser(inputs)
    }
    handleLogin(){
        let variables = {...this.props.authReducer.userReq};
        this.props.mutateUser(variables);
        // console.log('var',this.props.authReducer.userMutateState);
        browserHistory.push('/')


    }
    render(){
        const { classes } = this.props;
        const inputs = this.props.authReducer.userReq;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <div className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>User Name</InputLabel>
                            <Input autoComplete="ownerName" name="ownerName" value={inputs.ownerName}
                                   onChange={this.handleChange.bind(this)} autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>Email</InputLabel>
                            <Input autoComplete="email" name="email" value={inputs.email}
                                   onChange={this.handleChange.bind(this)} autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>Contact Number</InputLabel>
                            <Input autoComplete="contactNumber" name="contactNumber" value={inputs.contactNumber}
                                   onChange={this.handleChange.bind(this)} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>Register Number</InputLabel>
                            <Input autoComplete="registerNumber" name="registerNumber" value={inputs.registerNumber}
                                   onChange={this.handleChange.bind(this)} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>Comapany Name</InputLabel>
                            <Input autoComplete="companyName" name="companyName" value={inputs.companyName}
                                   onChange={this.handleChange.bind(this)} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>City</InputLabel>
                            <Input autoComplete="city" name="city" value={inputs.city}
                                   onChange={this.handleChange.bind(this)} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel>Password</InputLabel>
                            <Input  type="password" name="password" value={inputs.password}
                                    onChange={this.handleChange.bind(this)} autoComplete="current-password" />
                        </FormControl>
                        {this.props.authReducer.loginState === 3 &&
                        <div className="col-xs-12">
                            <div className="alert alert-danger">
                                <strong>{this.props.authReducer.error}</strong>
                            </div>
                        </div>
                        }
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleLogin.bind(this)}
                        >
                            Sign up
                        </Button>
                        {/*<div className="col-md-12">*/}
                        {/*Don't have an account? <span*/}
                        {/*onClick={this.signupModal.bind(this)}>REGISTER</span>*/}

                        {/*</div>*/}
                    </div>
                </Paper>
            </main>
        );
    }

}

SignUp3.propTypes = {
    classes: PropTypes.object.isRequired,
    mutateUser: PropTypes.func.isRequired,
    setUser:PropTypes.func.isRequired,
};
function mapStateToProps(state) {
    return {
        authReducer: state.authReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthActions, dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(SignUp3));