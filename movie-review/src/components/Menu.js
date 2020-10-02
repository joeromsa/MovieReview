import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const padding = {
        padding: 5
    }

    return (
        <div>
            <Link style={padding} to="/">My Movies</Link>
            <Link style={padding} to="/add">Add Rating</Link>
        </div>
    );
}

export default Menu;