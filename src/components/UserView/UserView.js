import React from 'react';
import { Link } from 'react-router-dom';

export const UserView = ({match}) => {
    return (
        <div>
            <div>Selected user: <strong>{match.params.userId}</strong></div>
            <Link to='/users'>Go back to user list</Link>
        </div>
    )
}
