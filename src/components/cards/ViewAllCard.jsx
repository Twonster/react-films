import styled from 'styled-components'
import { Wrapper, Description, Tittle } from './card.styled'

const NewDescription = styled(Description)`
    justify-content: center;
`

const ViewAllCard = ({ href }) => {
    return (
        <Wrapper>
            <NewDescription>
                <Tittle to={`/films/film-id/${href}`}>View All...</Tittle>
            </NewDescription>
        </Wrapper>
    )
} 

export default ViewAllCard
