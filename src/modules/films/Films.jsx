import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FilmCard from '../../components/cards/FilmCard'
import Preloader from '../../components/preloader/Preloader'
import FiltersSection from './filters/FiltersSection'

const Container = styled.div`
    overflow-y: scroll;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
const FilmsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
`

const Films = (props) => {
    const { data, error, loading, initialValue } = useSelector(({ filmsCardReducer }) => filmsCardReducer)

    const spawn = () => data.map(item => <FilmCard key={item.id} {...item} /> )

    return (
        <Container>
            <Wrapper>
                <FiltersSection />
                {loading ? <Preloader /> : <FilmsSection>{spawn()}</FilmsSection>}
            </Wrapper>
        </Container>
    )
}

export default Films
