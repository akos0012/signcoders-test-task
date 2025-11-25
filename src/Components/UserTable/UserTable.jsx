import { useMemo, useState } from "react";
import SearchInput from "../SearchInput";
import SortButton from "../SortButton";

import "./UserTable.css";

const UserTable = ({ users }) => {
    const [searchByName, setSearchByName] = useState("");
    const [isAscendingByName, setIsAscendingByName] = useState(true);

    const filteredAndSortedUsers = useMemo(() => {
        return [...users]
            .filter(user =>
                user.name.toLowerCase().startsWith(searchByName.toLowerCase())
            )
            .sort((a, b) =>
                isAscendingByName
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            );
    }, [users, searchByName, isAscendingByName]);

    return (
        <div className="UserTable">
            <SearchInput value={searchByName} onChange={setSearchByName} placeholder={"Search by name..."} />

            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                            <SortButton
                                isAscending={isAscendingByName}
                                onClick={() => setIsAscendingByName(prev => !prev)}
                            />
                        </th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;