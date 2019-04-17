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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
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
    button: {
        backgroundColor: theme.palette.primary.main,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class SignIn extends Component {
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

        this.props.setLoginRequest(inputs);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.authReducer.loginState === 1 && nextProps.authReducer.loginState === 2) {
            Auth.authenticateUser(nextProps.authReducer.login.token);
            browserHistory.push('/post');
            window.location.reload()
        }
    }

    signupModal() {
        browserHistory.push('/signUp2')
    }
    signupModal2() {
        browserHistory.push('/signUp3')
    }
    login(){
        let variables = this.props.authReducer.loginRequest;
        console.log('var',variables);
        this.props.login(variables);

    }
render(){
    const { classes } = this.props;
    let inputs = this.props.authReducer.loginRequest;

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        </IconButton>
                        <Typography variant="h3" color="inherit" className={classes.grow}>
                            <img src={require('./logo2.png')} alt="Kitten" height="70" width="170" />

                        </Typography>
                        <Button color="inherit" style={{fontSize:13}} onClick={this.signupModal.bind(this)}>Distributor</Button>
                        <Button color="inherit" style={{fontSize:13}} onClick={this.signupModal2.bind(this)}>Shop Owner</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6} style={{  backgroundImage: "url(" + "https://cdn3.iconfinder.com/data/icons/people-network-and-connection-4/512/20-512.png" + ")",
                    marginTop:80,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',}}>
                    <Typography variant="h4" color="inherit" className={classes.grow} style={{marginLeft:75,fontFamily:'coronet',color:"blue"}}>
                        Bridging The Gap Between Distributors & Shop Owners
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6}>
        <main className={classes.main} >


            <CssBaseline />
            <Paper className={classes.paper} style={{borderRadius:30}}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h3">
                    Sign in
                </Typography>
                <div className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                            <InputLabel>Email Address</InputLabel>
                        <Input name="email" autoComplete="email" value={inputs.email} onChange={this.handleChange.bind(this)} autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel>Password</InputLabel>
                        <Input name="password" type="password" value={inputs.password} onChange={this.handleChange.bind(this)} autoComplete="current-password" />
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
                        onClick={this.login.bind(this)}
                    >
                        Sign in
                    </Button>
                    {/*<div className="col-md-12">*/}

                        {/*Don't you have an account &nbsp;? <br/>Go and Creat your Dashbords. <span*/}
                        {/*></span>*/}
    {/*<div>*/}
    {/*&nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;*/}
{/*<button><div >Distributor</div></button>*/}
    {/*&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;*/}
{/*<button><div >Shop Owner</div></button>*/}
    {/*</div>*/}

                    {/*</div>*/}


                </div>
            </Paper>
        </main>
                </Grid>
            </Grid>
        </div>
    );
}

}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    setLoginRequest:PropTypes.func.isRequired,
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
)(withStyles(styles)(SignIn));