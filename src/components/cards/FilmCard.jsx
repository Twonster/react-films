
import { POSTER_SIZE } from '../../constants/APIConfig'

import Raiting from '../raiting/Raiting'

import nofound from '../../images/no-found-film.svg'

import { Wrapper, Card, Description, Tittle, SecondHeading } from './card.styled'
import styled from 'styled-components'
import LikeButton from '../card-decorators/LikeButton'

const NewCard = styled(Card)`
    display: flex;
    flex-direction: column;
    position: relative;
`

const Image = styled.div`
    background-image: url(${props => props.image ? POSTER_SIZE.w342+props.image : nofound });
    background-position: center;
    background-size: cover;
    height: 300px;
`

const FilmCard = (props) => {
    return (
        <Wrapper>
            <NewCard>
                <Image image={ props.poster_path }/>
                <Description>
                    <Tittle to={`/films/film-id/${props.id}`}>{props.title}</Tittle>
                    <SecondHeading>{props.release_date}</SecondHeading>
                    <Raiting position="absolute" votes={props.vote_average} />
                </Description>
                <LikeButton styles={['absolute', '15px']} filmId={props.id}/>
            </NewCard>
        </Wrapper>
    )
}

export default FilmCard
