import React, {useEffect, useState} from 'react';
import { Input, List, Typography } from 'antd';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';

const { Search } = Input;

const SearchBar = () => {
    const { searchresults = [], query = '' } = usePage().props;
    const [searchQuery, setSearchQuery] = useState(query);


    const onSearch = (value) => {
        router.get('/shop/search', { query: value }, { preserveState: true });
    };


    return (
        <div style={{ margin: '20px' }}>
    {/* Search Input */}
    <Search
        placeholder="Search"
    enterButton
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onSearch={onSearch}
    allowClear
    style={{ maxWidth: '400px' }}
    />

    {/* Results List */}
    {/*{searchresults.length > 0 && (*/}
    {/*    <div style={{ marginTop: '20px' }}>*/}
    {/*    <Typography.Title level={4}>Search Results:</Typography.Title>*/}
    {/*<List*/}
    {/*    bordered*/}
    {/*    dataSource={searchresults}*/}
    {/*    renderItem={(item) => (*/}
    {/*    <List.Item>*/}
    {/*        <Typography.Text>{item.name}</Typography.Text>*/}
    {/*    </List.Item>*/}
    {/*)}*/}
    {/*    />*/}
    {/*    </div>*/}
    {/*)}*/}

    {/* No Results */}
    {/*{searchresults.length === 0 && query && (*/}
    {/*    <Typography.Text type="secondary">*/}
    {/*        No results found for "{query}".*/}
    {/*                             </Typography.Text>*/}
    {/*)}*/}
    </div>
);
};

export default SearchBar;
