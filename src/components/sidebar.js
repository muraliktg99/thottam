import useUser from '../hooks/use-user';

export default function Sidebar() {
    const { user } = useUser();

    console.log('usnopeer', user);

    return (
        <div className="shadow-lg p-5 bg-white rounded my-3 mx-5">
            <h1>sidebar</h1>
        </div>
    );
}
