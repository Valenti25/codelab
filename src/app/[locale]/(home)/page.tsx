import { Home as HomeComponent } from './Home'
import { HomeHero } from '@/components/pages/home/home-hero'

async function HomePage(props: { params: Promise<{ locale: string }> }) {
   const { locale } = await props.params

   return (
      <main className="w-full">
         <HomeHero />
         <HomeComponent />
      </main>
   )
}

export default HomePage
