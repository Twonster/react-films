import styled from 'styled-components'
import { PROFILE_SIZES } from '../../constants/APIConfig'

import { Wrapper, Card, Image, Description, Tittle, SecondHeading } from './card.styled'

import notFound from '../../images/avatarNotFound.png'

const NewWrapper = styled(Wrapper)`
    width: 20%;
`
const NewDesctiption = styled(Description)`
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
`
const NotFoundImage = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 100%;
    height: 250px;
`
const NewImage = styled(Image)`
    width: 100%;
    height: 250px;
`

const HumanCard = (props) => {
    return (
        <NewWrapper>
            <Card>
                {props.profile_path 
                ? <NewImage src={`${PROFILE_SIZES.w185}${props.profile_path}`} />
                : <NotFoundImage img={notFound} />
                }
                <NewDesctiption>
                    <Tittle to={`/films/film-id/${props.id}`}>{props.name}</Tittle>
                    <SecondHeading>{props.character}</SecondHeading>
                </NewDesctiption>
            </Card>
        </NewWrapper>
    )
}

export default HumanCard
