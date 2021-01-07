import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Copyrigth() {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
            <Link color="inherit" href="https://www.wispro.co/">
                Wispro
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
        </div>
    )
}
