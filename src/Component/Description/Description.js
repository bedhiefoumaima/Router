import { Button } from '@material-ui/core';
import React from 'react'

const Description = ({
    location:{
        state:{movie},
    }, 
    history
}) => {
    return (
        <div>
           <h1>{movie.name}</h1>
           <Button onClick ={ () => history.goBack()}>Go back</Button>
        </div>
    )
}

export default Description;
