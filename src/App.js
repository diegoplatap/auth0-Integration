import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div>
        {isAuthenticated ? (
          <>
            <Profile name={user.name} email={user.email} />
            <button onClick={() => logout()}>Log Out</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
    </>
  );
}

export default App;
