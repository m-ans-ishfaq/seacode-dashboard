import { Layout } from "../components/base/layout";
import { useUsers } from "../hooks/useUsers";

export function Users()
{
    const { users, admin } = useUsers();

    if (!admin) return (
        <Layout title="Unauthorized">
            <div className="w-full h-full flex items-center justify-center">
                You don't have access to this page
            </div>
        </Layout>
    );

    return (
        <Layout title="Users">
            You have users
        </Layout>
    )
}