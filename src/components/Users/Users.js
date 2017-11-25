import React from 'react';

import './Users.scss';

export const Users = () => {
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
                    <tr>
                        <td>kubaprzetakiewicz</td>
                        <td>Kuba</td>
                        <td>Przetakiewicz</td>
                        <td><a href="https://github.com/kubaprzetakiewicz">@kubaprzetakiewicz</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
};