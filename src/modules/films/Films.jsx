import { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilmCard from '../../components/filmCard/FilmCard'
import { API_KEY } from '../../constants/APIConfig'

const Wrapper = styled.div`
    display: flex;
`
const FiltersSection = styled.div`
    min-width: 250px;
    max-width: 300px;
`
const FilmsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Films = (props) => {
    const [data, setData] = useState([])
    const searchWord = 'girls'

    const callApi = async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWord}`)
        const respData = await resp.json()
        setData(respData.results)
    }

    const spawn = (props) => {
        return data.map(item => <FilmCard key={item.id} {...item} /> )
    }
    
    useEffect(() => {
        callApi()
    }, [])
    
    return (
        <Wrapper>
            <FiltersSection>фильтры</FiltersSection>
            <FilmsSection>{spawn()}</FilmsSection>
        </Wrapper>
    )
}

export default Films