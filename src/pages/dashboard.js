import { useContext, useEffect } from "react";
import Header from '../components/header';
import TimeLine from '../components/timeline';
import Sidebar from '../components/sidebar';
import * as ROUTES from '../constants/routes';
import { useHistory } from "react-router";
import UserContext from "../context/user";

function Dashboard() {
    const history = useHistory();
    const { user } = useContext(UserContext);
    useEffect(() => {
        // if(user === null) {
        //     history.push(ROUTES.LOGIN);
        // }
        document.title = "thottam";
    }, []);
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between max-w-screen-lg mx-auto">
                <TimeLine className="col-span-3" />
                <Sidebar />
            </div>
        </div>
    );
}

export default Dashboard;