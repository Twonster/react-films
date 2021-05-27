import styled from "styled-components"

const Wrapper = styled.div`
    margin: 0 0 0 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: #fff;

    .name-wrapper {
        display: flex;
        font-size: ${props => props.nickname ? '20px' : '30px'};

        .name {
            
        }
        .lastname {
            margin: 0 0 0 10px;
        }
    }
    .nickname {

    }
    .email {
        font-size: .8rem;
    }

    p {
        font-size: 30px;
        margin: 0;
        font-weight: 100;
        text-transform: capitalize;
    }
`

const UserCred = ({ name, lastname, nickname, email }) => {
    return (
        <Wrapper nickname={nickname}>
            <p className="nickname">{nickname}</p>
            <div className="name-wrapper">
                <p className="name">{name}</p>
                <p className="lastname">{lastname}</p>
            </div>
            <p className="email">{email}</p>
        </Wrapper>
    )
}

export default UserCred
