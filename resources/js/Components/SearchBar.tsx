import React, { useEffect, useState } from "react";
import { Input, List, Typography } from "antd";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import {SearchOutlined} from "@ant-design/icons"
const { Search } = Input;

const SearchBar = () => {
    const { searchresults = [], query = "" } = usePage().props;
    const [searchQuery, setSearchQuery] = useState(query);

    const onSearch = (value) => {
        // value = value.target.value
        // if(value.length<=0){
        //     return
        // }
        router.get("/shop/search", { query: value }, { preserveState: true });
    };

    return (
        <div style={{ margin: "20px" }}>
            {/* Search Input */}
            {/*<Input style={{ maxWidth: "400px" }} value={searchQuery} allowClear onPressEnter={(e) =>onSearch(e.target.value)} onClear={() =>onSearch('')}  onChange={(e) => setSearchQuery(e.target.value)} size="small" placeholder="Search" prefix={<SearchOutlined />} />*/}
            <Input.Search
                placeholder="Search"
                size={"small"}
                enterButton={false}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={onSearch}
                allowClear
                style={{ maxWidth: "400px" }}
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
