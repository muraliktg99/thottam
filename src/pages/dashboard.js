<<<<<<< HEAD
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
        if(user === null) {
            history.push(ROUTES.LOGIN);
        }
        document.title = "thottam";
    }, []);
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <TimeLine />
                <Sidebar />
            </div>
        </div>
    );
}

=======
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
        if(user === null) {
            history.push(ROUTES.LOGIN);
        }
        document.title = "thottam";
    }, []);
    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <TimeLine />
                <Sidebar />
            </div>
        </div>
    );
}

>>>>>>> c5f3bbff6872c5642bb218f38e537a404c863dff
export default Dashboard;