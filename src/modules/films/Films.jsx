import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FilmCard from '../../components/cards/FilmCard'
import Preloader from '../../components/preloader/Preloader'
import { API_KEY } from '../../constants/APIConfig'

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
const FiltersSection = styled.div`
    min-width: 250px;
    max-width: 300px;
    background-color: #c4c4c4;
`
const FilmsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;
    height: 100%;
`

const Films = (props) => {
    // const [data, setData] = useState([])
    // const [delay, setDelay] = useState(true)
    // const searchWord = 'war'
    const { data, error, loading, initialValue } = useSelector(({ searchDataReducer: { response } }) => response)
    // const pause = async () => new Promise((res, rej) => setTimeout(res, 3000))

    // const callApi = async () => {
    //     const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWord}&page=1`)
    //     const respData = await resp.json()
    //     setData(respData.results)
    //     // await pause()
    //     setDelay(false)
    // }

    const spawn = () => data.map(item => <FilmCard key={item.id} {...item} /> )

    // useEffect(() => {
    //     callApi()
    // }, [])
    
    return (
        <Wrapper>
            <FiltersSection>фильтры</FiltersSection>
            {loading ? <Preloader /> : <FilmsSection>{spawn()}</FilmsSection>}
        </Wrapper>
    )
}

export default Films
