import Search from './ui/search'
import { WeatherForecastList } from './ui/table';

type HomeProps = {
  searchParams: {
    search: string;
    currentPage: number;
  }
}

export default function Home({ searchParams }: HomeProps) {
  const query = searchParams.search || 'monterrey';

  const currentPage = Number(searchParams.currentPage) || 1;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background-cream gap-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Search placeholder="e.g. Monterrey" />
      </div>
      
       <WeatherForecastList query={query}  />
    </main>
  )
}
