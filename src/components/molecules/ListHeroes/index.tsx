import Error from 'components/atoms/Error'
import Loading from 'components/atoms/Loading'
import HeroCard from 'components/molecules/HeroCard'

import { IHero } from 'services/Hero'

import { Container, WrapperAvailableSpace } from './styles'

interface IListHeroes {
  loading: boolean
  error: boolean
  heroes: IHero[]
  onChangeFavorite: Function
  onClick: Function
}

function ListHeroes({
  heroes,
  loading,
  error,
  onChangeFavorite,
  onClick,
}: IListHeroes) {
  if (loading) {
    return (
      <WrapperAvailableSpace>
        <Loading />
      </WrapperAvailableSpace>
    )
  }

  if (error) {
    return (
      <WrapperAvailableSpace>
        <Error text="Houve um erro ao tentar buscar os dados." />
      </WrapperAvailableSpace>
    )
  }

  if (!heroes.length) {
    return (
      <WrapperAvailableSpace>
        <Error text="Não achamos nenhum herói para os valores definidos" />
      </WrapperAvailableSpace>
    )
  }

  return (
    <Container>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          id={hero.id}
          name={hero.name}
          isFavorite={Boolean(hero?.isFavorite)}
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          onFavoriteChange={(isFavorite: boolean) =>
            onChangeFavorite(hero, isFavorite)
          }
          onClick={onClick}
        />
      ))}
    </Container>
  )
}

export default ListHeroes
