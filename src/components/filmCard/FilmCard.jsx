import styled from 'styled-components'
import { POSTER_SIZE } from '../../constants/APIConfig'
import Raiting from './Raiting'

const Wrapper = styled.div` 
    display: inline-flex;
    width: 185px;
`
const Card = styled.div`
    margin: 5px;
    box-shadow: 0 6px 10px 0px #0000002e;
    border-radius: 10px;
    overflow: hidden;
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
        margin: 10px 0 0 0;
        font-weight: 700;
    }
`

const FilmCard = (props) => {
    console.log(props)
    return (
        <Wrapper>
            <Card>
                <Image src={POSTER_SIZE.w185 + props.poster_path}/>
                <Description>
                    <span className="film-name">{props.title}</span>
                    <span className="release-date">{props.release_date}</span>
                    <Raiting votes={props.vote_average} />
                </Description>
            </Card>
        </Wrapper>
    )
}

export default FilmCard