import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function ProfilePage() {

    const {logoutAuthUser} = useContext(AuthContext);

    return(
        <>
            <h1>ProfilePage</h1>
            <button onClick={logoutAuthUser}>Log out</button>
        </>
    )
}