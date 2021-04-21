import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { POSTER_SIZE } from '../../constants/APIConfig'
import Raiting from '../raiting/Raiting'

const Wrapper = styled.div` 
    display: inline-flex;
    width: 14.2%;
`
const Card = styled.div`
    margin: 5px;
    box-shadow: 0 6px 10px 0px #0000002e;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
`
const Description = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;

    & .film-name {
        color: #404040;
        transition: .2s;
        cursor: pointer;
        margin: 10px 0 0 0;
        font-weight: 700;
        text-decoration: none;

        &:hover {
            color: #50a3ff;
        }
    }

    & .release-date {
        font-size: 11px;
        opacity: .7;
    }
`

const FilmCard = (props) => {
    return (
        <Wrapper>
            <Card>
                <Image src={POSTER_SIZE.w342 + props.poster_path}/>
                <Description>
                    <NavLink to={`/films/film-id/${props.id}`} className="film-name">{props.title}</NavLink>
                    <span className="release-date">{props.release_date}</span>
                    <Raiting position="absolute" votes={props.vote_average} />
                </Description>
            </Card>
        </Wrapper>
    )
}

export default FilmCard