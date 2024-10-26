import React, { PropsWithChildren } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement,
) => {
    if (type === "prev") {
        return <a>Previous</a>;
    }
    if (type === "next") {
        return <a>Next</a>;
    }
    return originalElement;
};

interface Props{
  handleChange:any
  current:any
  total:number
  perPage:number
  onShowSizeChange:any
}

const PaginationDiv: React.FC<Props> = ({current,handleChange,onShowSizeChange,total,perPage}) =>{
  return <Pagination onShowSizeChange={onShowSizeChange}  current={current} pageSize={perPage} total={total} itemRender={itemRender} onChange={handleChange} />
}


export default PaginationDiv;
