import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import LoadingBar from '../components/loadingBar';
import * as ROUTES from '../constants/routes';

function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                history.push(ROUTES.DASHBOARD);
                setError('');
                setLoading(false);
            })
            .catch((e) => {
                console.log(e.message);
                setError(e.message);
                setLoading(false);
                // ..
            });
    };

    useEffect(() => {
        document.title = 'Thottam-Login';
    }, []);

    return (
        <div className="container zxl:flex-col sm:flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex flex-col md:w-2/5">
                <img src="/images/social-media.png" className="object-scale-down md:h-100 h-60" alt="Social Media" />
            </div>
            <div className="flex p-3 flex-col md:w-3/5">
                    {loading && <LoadingBar height={8} />}
                <div className="bg-white rounded border p-4 border-gray-primary mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Thottam" className="mt-2 w-6/12 mb-4" />
                    </h1>

                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form className="m-2" onSubmit={handleLogin} method="POST">
                        <input
                            aria-label="Enter mail ID"
                            type="text"
                            placeholder="Email address"
                            className="shadow-sm text-sm text-gray-base w-full mr-3 py-5 h-2 px-4 border border-gray-primary rounded mb-3"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <input
                            aria-label="Enter Password"
                            type="password"
                            placeholder="Password"
                            className="shadow-sm text-sm text-gray-base w-full mr-3 py-5 h-2 px-4 border border-gray-primary rounded mb-4"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-medium text-white h-12 shadow-lg font-bold w-full rounded ${isInvalid && 'opacity-50'}`}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
                <div className="items-center flex justify-center flex-col w-full rounded bg-white p-4 border border-gray-primary">
                    <p className="text-sm">Don't have an account? {' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;