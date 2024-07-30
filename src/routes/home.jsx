import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Home()
{
    return (
        <main className="flex flex-col justify-center items-center min-h-screen">
            <h1>Hello World</h1>
            <a
                className="mb-4 text-blue-600 hover:underline capitalize"
                href="https://ui.shadcn.com/docs/components/accordion"
                target="_blank"
            >
                Explore and install other shadCN components
            </a>
            <Button>This is a ShadCN button</Button>
            <div className="mt-4 flex gap-4">
                <Link to="/page-1">
                    <Button variant="outline">Page 1</Button>
                </Link>
                <Link to="/page-2">
                    <Button variant="outline">Page 2</Button>
                </Link>
            </div>
        </main>
    )
}