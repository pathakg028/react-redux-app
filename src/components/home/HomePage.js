import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="jumbotron">
            <h1> Plural Administration </h1>
            <p> React , Readux Leaning </p>
            <Link to="about" className="btn btn-primary btn-lg"> Lean More</Link>

        </div>)
}
export default HomePage;