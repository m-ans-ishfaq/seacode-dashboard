import { USERS_DATA } from "../data/users"
import { createContext, useContext, useState } from "react";
import { v4 as id } from 'uuid';

const UsersContext = createContext({
    users: USERS_DATA,
    admin: false,
    loggedInUser: null,
    logIn: (username, password) => {},
    addUser: (username, password) => {},
    logOut: () => {}
});

export const UsersProvider = ({ children }) => {
    
    const [users, setUsers] = useState(USERS_DATA);
    const [admin, setAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const logIn = (username, password) => {
        if (username === 'admin' && password === "adminpass") {
            setAdmin(true);
            setLoggedInUser({ id: 1, username: "admin", password: "adminpass" });
            return true;
        }

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            setAdmin(false);
            setLoggedInUser(user);
            return true;
        }

        return false;
    }

    const addUser = (username, password) => {

        const user = users.find(u => u.username === username);

        if (user) return false;

        setUsers(u => [...u, {
            id: id(), username, password
        }]);

        return true;

    }

    const logOut = () => {
        setAdmin(false);
        setLoggedInUser(null);
    }

    return (
        <UsersContext.Provider value={{ users, admin, loggedInUser, logIn, addUser, logOut }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => useContext(UsersContext);