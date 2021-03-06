import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    News
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
