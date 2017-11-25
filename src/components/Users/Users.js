import React from 'react';
import { Link } from 'react-router-dom';

import { User } from './User/User';
 
import './Users.scss';

const USERS = [
    {
        id: 1,
        username: 'kubaprzetakiewicz',
        name: 'Kuba',
        surname: 'Przetakiewicz'
    },
    {
        id: 2,
        username: 'tylermcginnis',
        name: 'Tyler',
        surname: 'McGinnis'
    },
    {
        id: 3,
        username: 'coryhouse',
        name: 'Cory',
        surname: 'House'
    }
];

export default class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: USERS
        }
    }

    render() {
        return (
            <section className='users'>
                <table className='users__table'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>GitHub</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userList.map((user) => {
                            return <User key={user.id} username={user.username} name={user.name} surname={user.surname} />
                        })}
                    </tbody>
                </table>
            </section>
        )
    }
};