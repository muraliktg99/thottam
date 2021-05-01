import { useContext } from "react";
import UserContext from '../context/user';
import FirebaseContext from '../context/firebase';

export default function TimeLine() {
    const { user } = useContext(UserContext);
    const { firebase } = useContext(FirebaseContext);
    try{
        const docDetails =  firebase.firestore().collection('users').where('userId', '==', user.l).get();
        console.log(docDetails);
    }
    catch(e) {
        console.log(e.message);
    }

    return (
        <div className="shadow-lg pb-20 my-3 bg-white rounded mx-2">
            <img height={100} width={100} className="h-96 w-full object-cover" src="/images/post.jpg" />
        </div>
    );
}