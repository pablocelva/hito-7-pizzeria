import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true)

    const handleLogin = () => {
        setToken(true)
    }
    const handleLogout = () => {
        setToken(false)
    }

    return (
        <UserContext.Provider value={{ token, setToken, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}
