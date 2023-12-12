import Search from './ui/search'
import Paper from './ui/reusable/paper';
import { WeatherForecastList } from './ui/table';

type HomeProps = {
  searchParams: {
    search: string;
    currentPage: number;
  }
}

export default function Home({ searchParams }: HomeProps) {
  const query = searchParams.search || 'monterrey';

  return (
    <>
      <Paper>
        <h1 className="text-2xl font-bold text-center">Reservamos techincal test</h1>
      </Paper>
        <main className="flex min-h-screen flex-col items-center pt-4 md:p-24 bg-background-cream gap-4">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Search placeholder="e.g. Monterrey" />
      </div>
      
       <WeatherForecastList query={query}  />
    </main>
    </>
  )
}
