import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';

export default function Header() {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    console.log('user', user);

    return (
        <header className="bg-white border-b border-gray-primary mb-8 w-100 p-4 shadow-md">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1>
                            <Link to={ROUTES.DASHBOARD} aria-label="thottam logo">
                                <img src="/images/logo.png" alt="Thottam" className="w-20" />
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray-700 align-items text-center flex items-center">
                        {user ? (
                            <>
                                <Link title="Dashboard" to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-6 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </Link> 

                                <button
                                    type="button"
                                    title="Sign out"
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            firebase.auth().signOut();
                                        }
                                    }} >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-6 h-6 w-6 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                </button>
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`/p/${user.displayName}`}>
                                    <img
                                    className="rounded-full shadow-lg h-8 w-8 flex"
                                    src={`/images/avatars/${user.displayName}.jpg`}
                                    alt={`${user.displayName} profile`}
                                    />
                                    </Link>
                                </div>
                            </>
                        ) :
                            (
                                <>
                                    <Link to={ROUTES.LOGIN} aria-label="Dashboard">
                                        <button className="bg-blue-medium text-white py-2 px-4 rounded">Sign in</button>
                                    </Link>
                                </>
                            )}
                    </div>

                </div>
            </div>
        </header>
    );
}