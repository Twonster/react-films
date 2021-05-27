import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons';

import loupe from '../../images/icons/magnifying-glass-ico.svg'
import useDebounce from '../customHooks/useDebounce';

const Wrapper = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #00000038;
`
const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    background-image: url(${loupe});
    background-position: left;
    background-repeat: no-repeat;
    background-size: 14px;
    align-items: center;
`
const Input = styled.input`
    height: 40px;
    width: 100%;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0 0 0 20px;
    color: #6f6f6f;
    font-size: 18px;
`

const SearchInput = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect( () => {
        if (debouncedSearchTerm) {
            const callApi = async ()  => {
                await props.action(debouncedSearchTerm)
            }
        callApi()
        }
    }, [debouncedSearchTerm])

    const changeHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <Wrapper>
            <Container>
                <Input value={searchTerm} onKeyDown={props.enterAction} onChange={changeHandler} />
                <div>
                    {props.status && <LoadingOutlined color="#c4c4c4" style={{ fontSize: 20 }} spin />}
                </div>
            </Container>
        </Wrapper>
    )
}

export default SearchInput
