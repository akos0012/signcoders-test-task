import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import UserTable from "../Components/UserTable";

const fetchUsers = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return await res.json();
}

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await fetchUsers();
                setUsers(userData);
            } catch (error) {
                console.error("Error loading data:", error);
                setError("An error occurred while loading the data.");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [])

    if (loading) return <Loading />
    if (error) return <div style={{ color: "red" }}>{error}</div>;

    return <UserTable users={users} />
}

export default Home;