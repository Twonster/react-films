import { API_KEY } from '../../../constants/APIConfig';

import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import useDebounce from '../../customHooks/useDebounce';
import { useDispatch, useSelector } from 'react-redux';

import { GET_KEYWORDS_DATA } from '../../../redux/actions/sagaActionTypes';
import { setKeywords } from '../../../redux/actions/filmActions/filtersDataActions';
import 'antd/dist/antd.css';

const { Option } = Select;


const KeywordsSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const { data } = useSelector(({ filtersReducer: { keywords_resp } }) => keywords_resp)
    const dispatcher = useDispatch()

    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const spawnWordsList = () => {
        return data.length ? data.map(({ id, name }) => <Option key={id}>{name}</Option>) : []
    }

    useEffect( () => {
        if (debouncedSearchTerm) {
            const callApi = async ()  => {
                await dispatcher({
                    type: GET_KEYWORDS_DATA,
                    url: `https://api.themoviedb.org/3/search/keyword?api_key=${API_KEY}&query=${searchTerm}`        
                })
            }
        callApi()
        }
    }, [debouncedSearchTerm])

    const changeHandler = (val) => {
        dispatcher(setKeywords(val))
    }

    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select keywords"
            defaultValue={[]}
            onChange={changeHandler}
            onSearch={setSearchTerm}
        >
            {spawnWordsList()}
        </Select>
    )
}

export default KeywordsSearch
