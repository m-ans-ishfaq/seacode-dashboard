import { Layout } from "../components/base/layout";
import { BarChartComponent } from "../components/custom/charts";
import { CUSTOMERS_DATA } from "../data/customers";

export function HomePage()
{
    return (
        <Layout>
            <BarChartComponent chartData={CUSTOMERS_DATA} />
        </Layout>
    )
}