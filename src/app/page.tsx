import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 2xl:grid-cols-4">

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 h-fit">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg h-fit"><CardList title='Latest Transactions'/></div>
      <div className="bg-primary-foreground p-4 rounded-lg h-fit"><AppPieChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg h-fit">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 h-fit"><AppAreaChart /></div>

      <div className="bg-primary-foreground p-4 rounded-lg h-fit"><CardList title='Popular Content' /></div>
    </div>
  );
}
