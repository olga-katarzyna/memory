import React from 'react';

import './Contact.scss';

export const Contact = () => {
    return (
        <address>
            <span className="name">
                <strong>Kuba Przetakiewicz</strong>
            </span>
            <span className="github">
                <a href="https://github.com/kubaprzetakiewicz">@kubaprzetakiewicz</a>
            </span>
            <span className="email">hello@kubaprzetakiewi.cz</span>
        </address>
    )
};