import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="px-8 py-4 h-16 border-b border-b-slate-800 flex justify-between items-center">
            <h2 className="text-neutral-300 font-medium text-lg">
                Seacode Title
            </h2>
            <div className="flex items-center gap-6">
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
            </div>
        </header>
    )
}