import React from 'react'
import styled from 'styled-components'

import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSortQuery, setSortValue } from '../../redux/actions/filmActions/filtersDataActions';

const Wrapper = styled.div`
    border-top: 1px solid #0000001f;

    & .tittle {
        padding: 7px 0 0 0;
        opacity: .8;
    }
`
const SSelect = styled(Select)`
    width: 100%;
`
const { Option } = Select;

const SortContent = (props) => {
    const sort_value = useSelector(({ filtersReducer: { sort_value } }) => sort_value)
    const dispatcher = useDispatch()


    const handleChange = (value) => {
        dispatcher(setSortValue(value))
        dispatcher(setSortQuery(`&sort_by${sort_value}`))
    }
    
    return (
        <Wrapper>
            <p className="tittle">Sort Results By </p>
            <SSelect defaultValue={sort_value} allowClear onChange={handleChange}>
                <Option value="popularity.asc" >Popularity Ascending</Option>
                <Option value="popularity.desc" >Popularity Descending</Option>
                <Option value="vote_average.asc" >Rating Ascending</Option>
                <Option value="vote_average.desc" >Rating Descending</Option>
                <Option value="release_date.asc" >Release Date Ascending</Option>
                <Option value="release_date.desc" >Release Date Descending</Option>
                <Option value="original_title.asc" >Title (A-Z)</Option>
                <Option value="original_title.desc" >Title (Z-A)</Option>
            </SSelect>
        </Wrapper>
    )
}

export default SortContent

