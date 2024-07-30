import { Layout } from "../components/base/layout";
import { BarChartComponent } from "../components/custom/charts";
import { CUSTOMERS_DATA } from "../data/customers";

export function HomePage()
{
    return (
        <Layout title="Welcome to Seacode">
            <BarChartComponent chartData={CUSTOMERS_DATA} />
        </Layout>
    )
}