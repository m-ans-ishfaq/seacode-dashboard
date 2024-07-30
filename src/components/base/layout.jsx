import { Header } from "./header";
import { SideBar } from "./sidebar";

export function Layout({ title, children })
{
    return (
        <>
            <main className={`transition-all duration-300 font-poppins bg-zinc-900 text-white min-h-screen grid grid-cols-5`}>
                <SideBar />
                <div className="col-span-4">
                    <Header {...{title}} />
                    <div className="h-[calc(100vh-4rem)] overflow-auto p-8">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}