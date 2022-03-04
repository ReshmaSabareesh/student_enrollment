import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo">ICTAK ENROLL</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/courses">Courses</Link>
                    {/* <Link className="link" to="/article-list">Articles </Link> */}
                    {/* <Link className="link" to="/signup">SignUp</Link> */}
                    <Link className="link" to="/student/login">Login</Link>
                    {/* <Link className="link" to="/edit">Edit Articles</Link> */}
                </div>
            </nav>
        </div>
    );
}

export default Header;