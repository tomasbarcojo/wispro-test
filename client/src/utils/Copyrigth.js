import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

export default function Copyrigth() {
    return (
        <div className='Copyright'>
                {'Copyright © '}
            <Link to="https://www.wispro.co/">
                Wispro
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </div>
    )
}
