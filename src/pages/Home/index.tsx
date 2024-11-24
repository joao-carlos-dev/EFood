import { useGetRestaurantQuery } from '../../services/api'

import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

const Home = () => {
  const { data: restaurantes, isLoading: isLoadingResta } =
    useGetRestaurantQuery()

  return (
    <>
      <Hero />
      <RestaurantsList rests={restaurantes} isLoading={isLoadingResta} />
    </>
  )
}

export default Home
