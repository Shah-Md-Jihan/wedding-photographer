
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {
    const { providerGoogleLogin, providerEmailLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        providerGoogleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        providerEmailLogin(email, password)
            .then(userData => {
                const user = userData.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => console.error(error))
    }


    return (
        <div style={{ marginTop: "125px" }} className='w-25 mx-auto bg-dark text-white p-5 rounded-2'>
            <h2 className='my-2'>Please Login!</h2>
            <Form onSubmit={handleEmailLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            name="password"
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">
                            <FaEyeSlash />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <p>New to our site?Please <Link to="/register" className='text-info fw-bold text-decoration-none'>Sign Up</Link></p>
                <Button variant="danger" type="submit" className='w-100'>
                    <span className='fw-bold'>Login</span>
                </Button>
            </Form>
            <p className='text-center'>Or</p>
            <Button variant="light" type="submit" onClick={handleGoogleLogin} className='w-100'>
                <FaGoogle /><span className='ms-1 fw-bold'>Login with Google</span>
            </Button>
        </div>
    );
};

export default Login;