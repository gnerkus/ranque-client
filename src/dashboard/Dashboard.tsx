import {useAuth} from "../auth/useAuth.ts";

function Dashboard() {
    const {session} = useAuth();

    return (
        <p>
            {/*TODO: remove the token before publishing*/}
            Dashboard {session?.token}
        </p>
    );
}

export default Dashboard