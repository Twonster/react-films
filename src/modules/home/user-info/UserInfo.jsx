import styled from "styled-components"
import UserAvatar from "../../../components/user-card/UserAvatar"
import UserCred from "../../../components/user-card/UserCred"

const Background = styled.div`
    min-height: 200px;
    background-image: url('https://source.unsplash.com/random/1200x500');
    display: flex;
    width: 100%;
    justify-content: center; 
    position: relative;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000;
        opacity: .5;
    }
`
const Container = styled.div`
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    display: flex;
    align-items: center;
`

const UserInfo = ({ email, name, lastname, nickname, userId }) => {
    const userInitials = lastname ? lastname[0] : name[0]
    return (
        <Background>
            <Container>
                <UserAvatar text={userInitials} />
                <UserCred 
                    email={email}
                    name={name} 
                    lastname={lastname} 
                    nickname={nickname} 
                />
            </Container>
        </Background>
    )
}

export default UserInfo