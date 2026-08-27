import Login from "@/pages/Login/Login";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Login></Login>
      </AuthProvider>
    </>
  );
}

export default App;
