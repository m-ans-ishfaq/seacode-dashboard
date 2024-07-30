import { Layout } from "../components/base/layout";
import { useQuotes } from "../hooks/useQuotes"

export function Quotes()
{
    const { data, error, isLoading } = useQuotes();

    if (isLoading) return (
        <Layout>Loading...</Layout>
    );

    if (error) return (
        <Layout>Couldn't load quotes...</Layout>
    );

    return (
        <Layout title="Quotes">
            <div className="space-y-4">
                {data.map(({q, a}, i) => (
                    <p>{q} ~ {a}</p>
                ))}
            </div>
        </Layout>
    )
}