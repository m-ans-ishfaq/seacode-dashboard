import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Layout } from "../components/base/layout"
import { z } from "zod"
import { useUsers } from "../hooks/useUsers"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters."
    })
})

export function SignUp() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "", password: "", email: ""
        },
    });
    const { addUser } = useUsers();

    function onSubmit(data) {
        
        const addSuccess = addUser(data.username, data.password);

        if (addSuccess) { 
            toast({
                title: "Registration Successful"
            });
            form.reset();
        } else {
            toast({
                title: "Registration failed ! User already exists !",
                variant: "destructive"
            });
        }

    }

    return (
        <Layout title="Sign Up">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="dark w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="johndoe" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input autoComplete="off" type="email" placeholder="john@gmail.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="x9h2aj1f" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="text-white bg-cyan-500 hover:bg-white hover:text-black">
                        Sign Up
                    </Button>
                </form>
            </Form>
        </Layout>
    )
}
