import { Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import FilmCard from '../../components/cards/FilmCard'
import PathTittle from '../../components/path_tittle/PathTittle'
import Preloader from '../../components/preloader/Preloader'
import { setCurrentPage } from '../../redux/actions/filmActions/allCardsDataAction'
import { GET_FILMS_CARDS } from '../../redux/actions/sagaActionTypes'
import FiltersSection from './filters/FiltersSection'

const Container = styled.div`
    overflow-y: scroll;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
`
const FilmsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: fit-content;
    flex-direction: column;
`
const FilmContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const SPagination = styled(Pagination)`
    justify-self: center;
    margin: 20px 0;
    align-self: center;
`
const Films = (props) => {
    const { data, error, loading, results_count, query, current_page } = useSelector(({ filmsCardReducer }) => filmsCardReducer)
    const dispatcher = useDispatch()

    const paginationHandler = (query, page) => {
        dispatcher(setCurrentPage(page))
        dispatcher({
            type: GET_FILMS_CARDS,
            url: `${query}&page=${page}`
        })
        console.log(query, page)
    }

    const spawn = () => data.map(item => <FilmCard key={item.id} {...item} /> )
    return (
        <Container>
            <PathTittle text="Films"/>
            <Wrapper>
                <FiltersSection />
                {loading
                    ? <Preloader /> 
                    : <FilmsSection>
                        <FilmContainer>
                            {spawn()}
                        </FilmContainer>
                        {data.length ? <SPagination onChange={(page) => paginationHandler(query, page)} current={current_page} total={results_count} showSizeChanger={false}/> : 'results not found...'}
                    </FilmsSection>}
            </Wrapper>
        </Container>
    )
}

export default Films
