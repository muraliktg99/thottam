import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import LoadingBar from '../components/loadingBar';
import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from '../services/firebase';

function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [secPassword, setSecPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState('');
    const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === '' || secPassword === '';

    const handleSignUp = async (event) => {
        event.preventDefault();
        //console.log({username, fullName,emailAddress,password});
        setLoading(true);
        const usernameExist = await doesUsernameExist(username);
        console.log(usernameExist);
        if (usernameExist === 0) {
            try {
                const createUserResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailAddress, password);

                await createUserResult.user.updateProfile({
                    displayName: username
                });

                setError('');
                await firebase.firestore().collection('users').add({
                    userId: createUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    following: [],
                    dateCreated: Date.now()
                })
                setSuccess('Account Created');
                setLoading(false);
                setTimeout(() => {history.push(ROUTES.DASHBOARD)},2000);

            } catch (e) {
                setLoading(false);
                setSuccess('');
                setError(e.message);
            }

        }
        else {
                setLoading(false);
                setSuccess('');
            setError("Username is Already Taken !");
        }

    };

    useEffect(() => {
        document.title = 'Thottam-Sign up';
    }, []);

    return (
        <div className="container justify-center flex mx-auto max-w-screen-md h-screen">

            <div className="mt-28 p-3 md:w-96">
                <div className="bg-white relative shadow-sm rounded border border-gray-primary mb-4">
                    {loading && <LoadingBar height={6} />}
                    <div className="p-5">
                        <h1 className="flex justify-center w-full">
                            <img src="/images/logo.png" alt="Thottam" className="mt-4 w-4/12 mb-8" />
                        </h1>
                        {success && <p className="mb-4 p-3 text-center bg-green-medium border rounded text-white">{success}</p>}
                        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                        <form onSubmit={handleSignUp} method="POST">
                            <input
                                aria-label="User name"
                                type="text"
                                placeholder="Username"
                                className="shadow-sm text-sm text-gray-base w-full mr-3 py-5 h-2 px-4 border border-gray-primary rounded mb-3"
                                onChange={({ target }) => setUsername(target.value)}
                                value={username}
                            />
                            <input
                                aria-label="Enter Full name"
                                type="text"
                                placeholder="Full name"
                                className="shadow-sm text-sm text-gray-base w-full mr-3 py-5 h-2 px-4 border border-gray-primary rounded mb-3"
                                onChange={({ target }) => setFullName(target.value)}
                                value={fullName}
                            />
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
                            <input
                                aria-label="Re-Enter Password"
                                type="password"
                                placeholder="Password"
                                className="shadow-sm text-sm text-gray-base w-full mr-3 py-5 h-2 px-4 border border-gray-primary rounded mb-4"
                                onChange={({ target }) => {
                                    (password !== target.value) ? setPassError("Password Not Match!") : setPassError('');
                                    setSecPassword(target.value);
                                }}
                                value={secPassword}
                            />
                            {passError && <p className="mb-4 text-xs text-red-primary">{passError}</p>}

                            <button
                                disabled={isInvalid || passError}
                                type="submit"
                                className={`bg-blue-medium text-white h-12 shadow-lg font-bold w-full rounded ${(isInvalid || passError) && 'opacity-50'}`}
                            >
                                Sign Up
                        </button>
                        </form>
                    </div>
                </div>
                <div className="items-center flex justify-center flex-col w-full rounded bg-white p-4 border border-gray-primary">
                    <p className="text-sm">Already have an account? {' '}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;