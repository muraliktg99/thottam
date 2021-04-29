import { useEffect } from "react";
import Header from '../components/header';
import TimeLine from '../components/timeline';
import Sidebar from '../components/sidebar';

function Dashboard() {
    useEffect(() => {
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

export default Dashboard;