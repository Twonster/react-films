import { POSTER_SIZE } from '../../constants/APIConfig'

import Raiting from '../raiting/Raiting'

import { Wrapper, Card, Image, Description, Tittle, SecondHeading } from './card.styled'

const FilmCard = (props) => {
    return (
        <Wrapper>
            <Card>
                <Image src={`${POSTER_SIZE.w342}${props.poster_path}`}/>
                <Description>
                    <Tittle to={`/films/film-id/${props.id}`}>{props.title}</Tittle>
                    <SecondHeading>{props.release_date}</SecondHeading>
                    <Raiting position="absolute" votes={props.vote_average} />
                </Description>
            </Card>
        </Wrapper>
    )
}

export default FilmCard
