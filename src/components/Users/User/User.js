import React from 'react';
import { Link } from 'react-router-dom';

export const User = (props) => {
    return (
        <tr>
            <td><Link to={`users/${props.username}`}>{props.username}</Link></td>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td><a href={`https://github.com/${props.username}`}>@{props.username}</a></td>
        </tr>
    )
}
