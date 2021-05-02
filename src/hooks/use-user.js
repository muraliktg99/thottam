import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function useUser() {
    const [activeuser, setActiveUser] = useState();
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {

            setActiveUser(response);
        }
        if (user.uid) {
            getUserObjByUserId();
        }
    }, [user])
}