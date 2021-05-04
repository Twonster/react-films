import React from 'react';
import { Select } from 'antd';

import 'antd/dist/antd.css';
import useDebounce from '../../customHooks/useDebounce';
import { useSelector } from 'react-redux';

const { Option } = Select;


const KeywordsSearch = (props) => {
    const children = [];
    // for (let i = 10; i < 36; i++) {
    //   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select keywords"
            defaultValue={['a10', 'c12']}
            // onChange={changeHandler}
        >
            {children}
        </Select>
    )
}

export default KeywordsSearch
