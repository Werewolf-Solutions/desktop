import React, { Component } from 'react'
import {
    Grid,
    Typography,
    Button
} from '@material-ui/core'
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function HeaderOut(props) {
    const [state, setState] = React.useState({
        signInDialog: false,
        signUpDialog: false
    })

    const handleSignInDialog = () => {
        setState({...state, signInDialog: !state.signInDialog});
    }

    const handleSignUpDialog = () => {
        setState({...state, signUpDialog: !state.signUpDialog});
    }
    return (
        <div>
            <Grid item container>
                <Grid item>
                    <Button
                        onClick={handleSignInDialog}
                    >Sign in</Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={handleSignUpDialog}
                    >Sign up</Button>
                </Grid>
            </Grid>
            <SignIn
                handleSignUpDialog={handleSignUpDialog}
                handleSignInDialog={handleSignInDialog}
                open={state.signInDialog}
                authUser={props.authUser}
            />
            <SignUp
                handleSignUpDialog={handleSignUpDialog}
                handleSignInDialog={handleSignInDialog}
                open={state.signUpDialog}
                authUser={props.authUser}
            />
        </div>
    )
}