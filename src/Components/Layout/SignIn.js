import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    FormControlLabel,
    Button,
    Grid,
    Typography,
    Checkbox,
    DialogTitle
} from '@material-ui/core'
import axios from 'axios'

export default function SignIn(props) {
    const [state, setState] = React.useState()
    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }
    const signIn = () => {
        const { email, password } = state;
        axios.post('/users/sign-in', {email, password}, { withCredentials: true })
        .then(res => {
            setState({
                message: res.data
            });
            console.log(res.data);
            props.authUser();
            props.handleSignInDialog();
        })
        .catch(err => console.log(err));
    }
    // TODO: remember password
    const rememberPassword = () => {        
    }
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleSignInDialog}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="sign-in">Sign in</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Enter your email and password to sign in.
                </DialogContentText>
                <TextField
                    variant="outlined"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    onClick={rememberPassword}
                />
                <Grid container>
                    <Grid item xs>
                    <Button >
                        Forgot password?
                    </Button>
                    </Grid>
                    <Grid item>                    
                    </Grid>
                </Grid>
                </DialogContent>
                <DialogActions>
                <Button
                    onClick={props.handleSignInDialog}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={signIn}
                    color="primary"
                >
                    Sign in
                </Button>
                <Button
                    onClick={props.handleSignUpDialog}
                    color="primary"
                >
                    Sign Up
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}