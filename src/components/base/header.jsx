import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUsers } from "../../hooks/useUsers";

export function Header({ title }) {

    const { logOut, loggedInUser } = useUsers();

    return (
        <header className="px-8 py-4 h-16 border-b border-b-slate-800 flex justify-between items-center">
            <h2 className="text-neutral-300 font-medium text-lg">
                {title}
            </h2>
            <div className="flex items-center gap-6">
                {loggedInUser ? (
                    <>
                        <h4>{loggedInUser.username}</h4>
                        <Button variant="destructive" className="text-base" onClick={() => logOut()}>
                            Log Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant="ghost" className="text-base">
                            <Link to="/sign-up">
                                Sign Up
                            </Link>
                        </Button>
                        <Button variant="ghost" className="text-base">
                            <Link to="/log-in">
                                Log In
                            </Link>
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}