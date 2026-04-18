import { Link, Outlet } from "react-router-dom";

export default function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div className="container">
            <div className="links">
                {profiles.map((profile) => (
                <Link key={profile} to={`/profiles/${profile}`} >
                    Profile {profile}
                </Link>
                ))}
            </div>

            <Outlet />
        </div>
    )
}