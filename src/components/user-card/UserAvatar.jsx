import styled from "styled-components"

const Avatar = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 50px;
        margin: 0;
        text-transform: uppercase;
        font-family: sans-serif;
        font-weight: 500;
    }
`


const UserAvatar = ({ text }) => {
    return (
        <Avatar>
            <p>{text}</p>
        </Avatar>
    )
}

export default UserAvatar
