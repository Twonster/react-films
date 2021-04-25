import styled from 'styled-components'

import { Wrapper, Description, Tittle } from './card.styled'

import arrow from '../../images/icons/arrow-next-ico.png'

const NewDescription = styled(Description)`
    justify-content: center;

    & .arrow {
        width: 15px;
        margin: 0 0 0 10px;
    }
`

const ViewAllCard = ({ href }) => {
    return (
        <Wrapper>
            <NewDescription>
                <Tittle to={`/films/film-id/${href}`}>View All <img className="arrow" src={arrow}/> </Tittle>
            </NewDescription>
        </Wrapper>
    )
} 

export default ViewAllCard
