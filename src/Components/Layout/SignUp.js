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
import axios from 'axios';

export default function SignUp(props) {
    const [state, setState] = React.useState()
    const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }
    const signUp = () => {
        const {email, password, password2 } = state;
        axios.post('/users/sign-up', {email, password, password2 })
        .then(res => {
            setState({
                message: res.data
            });
            console.log(res.data);
            props.authUser();
            props.handleSignUpDialog();
            props.handleSignInDialog();
        })
        .catch(err => console.log(err));
    }
    // TODO: remember password
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleSignUpDialog}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="sign-in">Sign up</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please fill the form to sign up.
                </DialogContentText>
                <Grid container spacing={1}>
                    <Grid item container>
                        <Grid item>
                            <Typography>
                                Email:
                            </Typography>
                        </Grid>
                        <Grid item>
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
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <Typography>
                                Password:
                            </Typography>
                        </Grid>
                        <Grid item>
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
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <Typography>
                                Repeat password:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                required
                                name="password2"
                                label="Repeat password"
                                type="password"
                                id="password2"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                </DialogContent>
                <DialogActions>
                <Button
                    onClick={props.handleSignUpDialog}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={signUp}
                    color="primary"
                >
                    Sign up
                </Button>
                <Button
                    onClick={props.handleSignInDialog}
                    color="primary"
                >
                    Sign In
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}