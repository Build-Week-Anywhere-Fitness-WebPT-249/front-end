//List of Classes, has to be searchable by the client. 
//Maybe a non-client can view the classes and instructors but can't sign up for classes. 
import React from 'react';
import { Link } from 'react-router-dom'
import ClassCard from './ClassCard'

function Classes (){

    return(
        <div>
            <h1>Classes</h1>

            <Link path='/classCard' component={ClassCard} />

        </div>
    )
}

export default Classes