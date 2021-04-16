import React from 'react'
import styled from 'styled-components'

const SInput = styled.input`
    background-color: fff;
    border: none;
    outline: none;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
` 

const HeaderInput = (props) => {
    return (
        <SInput 
            value="Value"
            type="text"
            placeholder="Search"    
        />
    )
}

export default HeaderInput
