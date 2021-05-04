import { Button } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'

import FilterContainer from '../../../components/filter/FilterContainer'
import FilterContent from '../../../components/filter/FilterContent'
import SortContent from '../../../components/filter/SortContent'


const Wrapper = styled.div`
    width: 300px;
`


const FiltersSection = () => {
    const [filtersIsOpened, setfiltersIsOpened] = useState(false)
    const [sortIsOpened, setSortIsOpened] = useState(false)

    const toggle = (type) => {
        switch (type) {
            case 'FILTERS': 
                setfiltersIsOpened(!filtersIsOpened);
                    break;
            case 'SORT': 
                setSortIsOpened(!sortIsOpened);
                    break;
        }
    }

    return (
        <Wrapper>
            <FilterContainer content={<SortContent />} type="SORT" toggleAction={toggle} showType={sortIsOpened} text="Sort" />
            <FilterContainer content={<FilterContent />} type="FILTERS" toggleAction={toggle} showType={filtersIsOpened} text="Filters" />
            <Button block shape="round" type="primary" >Apply filters</Button>
        </Wrapper>
    )
}

export default FiltersSection
