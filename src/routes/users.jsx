import { Layout } from "../components/base/layout";
import { useUsers } from "../hooks/useUsers";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function Users() {
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
            <Table>
                <TableCaption>A list of users</TableCaption>
                <TableHeader>
                    <TableRow className="hover:bg-cyan-100 hover:text-white">
                        <TableHead>Id</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead className="text-right">Password</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(({id, username, password}, i) => (
                        <TableRow className="hover:bg-cyan-500 hover:text-white">
                            <TableCell className="font-medium">{id}</TableCell>
                            <TableCell>{username}</TableCell>
                            <TableCell className="text-right">{password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Layout>
    )
}