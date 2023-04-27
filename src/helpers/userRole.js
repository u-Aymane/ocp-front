import jwtDecode from "jwt-decode";

export default function isUser(role) {
    let userRole = "admin";
    const token = localStorage.getItem("token");
    if (!token) return userRole === role;
    const payload = jwtDecode(token);
    if (payload?.super_admin) userRole = "super admin";
    localStorage.setItem("role", userRole === "super admin" ? 0 : 1);
    return userRole === role;
}
