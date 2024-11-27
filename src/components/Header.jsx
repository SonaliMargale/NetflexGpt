import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    const handlersignout = () => {
        signOut(auth).then(() => {
            Dispatch(removeUser())
            navigate("/")
        }).catch((error) => {
            navigate('/error')
        });
    }
    return (
        <div className="absolute w-screen top-0 left-0 z-10 bg-gradient-to-b from-black flex justify-between items-center px-4 py-2">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && (<div className="flex items-center space-x-4">
                <img
                    className="w-12 h-12"
                    src={user?.photoURL}
                    alt="usericon"
                />
                <button onClick={handlersignout} className="text-white font-bold px-4 py-2 rounded hover:bg-red-700">
                    Sign Out
                </button>
            </div>)
            }
        </div>
    );
};

export default Header;
