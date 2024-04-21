import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent the default form submit action
        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            console.log('Success:', response.data);
            navigate("/");  // Navigate to home page or dashboard after login
        } catch (error) {
            console.error('Login failed:', error);
            if (error.response) {
                // Handle HTTP errors
                console.log('HTTP error:', error.response.status);
                alert("Failed to login: " + error.response.data.message);
            } else {
                // Network errors or CORS issues
                console.log('Network/CORS error:', error.message);
                alert("Network or CORS error: " + error.message);
            }
        }
    };

    let imgs = [
        'https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg',
    ];

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#eceff1'  // Light grey background
        },
        formContainer: {
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        },
        formTitle: {
            marginBottom: '15px',
            color: '#333',
            fontWeight: 'bold'
        },
        inputField: {
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
        },
        loginButton: {
            width: '100%',
            padding: '10px 20px',
            color: 'white',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        },
        registerLink: {
            display: 'block',
            marginTop: '20px',
            color: '#dc3545',
            textDecoration: 'none'
        }
    };

    return (
        <div style={styles.container}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={imgs[0]} className="img-fluid" alt="Responsive" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <p className="lead fw-normal mb-0 me-3" style={styles.formTitle}>Log Into Your Account</p>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="form3Example3"
                                    style={styles.inputField}
                                    placeholder="Enter a valid email address"
                                    required  // Ensure input is not empty
                                />
                            </div>
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="form3Example4"
                                    style={styles.inputField}
                                    placeholder="Enter password"
                                    required  // Ensure input is not empty
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" style={styles.loginButton}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account? <a href="/register" style={styles.registerLink}>Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
