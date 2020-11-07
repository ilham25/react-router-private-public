import { logout } from "../utils/auth";

export default function Dashboard({ history }) {
  const userData = JSON.parse(localStorage.getItem("patto-post-jwt"));
  console.log();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Email : {userData.email}</p>
      <button
        onClick={() => {
          if (window.confirm("Logout?")) {
            logout();
            history.push("/login");
          }
        }}
      >
        logout
      </button>
    </div>
  );
}
