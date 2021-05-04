import React from 'react'
import styled from 'styled-components'

import { Select } from 'antd';

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

const SortContent = () => {
    const { Option } = Select;

    return (
        <Wrapper>
            <p className="tittle">Sort Results By </p>
            <SSelect defaultValue="Popularity Descending" allowClear>
                <Option value="Popularity Descending">Popularity Descending</Option>
                <Option value="Popularity Ascending">Popularity Ascending</Option>
                <Option value="Rating Descending">Rating Descending</Option>
                <Option value="Rating Ascending">Rating Ascending</Option>
                <Option value="Release Date Descending">Release Date Descending</Option>
                <Option value="Release Date Ascending">Release Date Ascending</Option>
                <Option value="Title (A-Z)">Title (A-Z)</Option>
                <Option value="Title (Z-A)">Title (Z-A)</Option>
            </SSelect>
        </Wrapper>
    )
}

export default SortContent
