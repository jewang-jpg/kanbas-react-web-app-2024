import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link className={`list-group-item border border-0 ${pathname.includes('Signin') ? 'active' : 'text-danger'}`} to={`/Kanbas/Account/Signin`}> Signin </Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Signup') ? 'active' : 'text-danger'}`} to={`/Kanbas/Account/Signup`}> Signup </Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Profile') ? 'active' : 'text-danger'}`} to={`/Kanbas/Account/Profile`}> Profile </Link>
    </div>
  );
}
