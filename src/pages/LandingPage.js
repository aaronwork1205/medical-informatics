import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f2f5',
    };

    const headingStyle = {
        color: '#333',
        marginBottom: '20px',
    };

    const buttonGroupStyle = {
        marginTop: '20px',
    };

    const buttonStyle = {
        textDecoration: 'none',
        padding: '10px 20px',
        color: 'white',
        backgroundColor: '#28a745',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    };

    return (
        <div style={containerStyle}>
            <div>
                <h1 style={headingStyle}>Welcome to this AI Doctor System </h1>
                <div style={buttonGroupStyle}>
                    <Link to="/login" style={buttonStyle}>Login</Link> | <Link to="/register" style={buttonStyle}>Register</Link>
                </div>
            </div>
        </div>
    );
}
