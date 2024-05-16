import React, { PropsWithChildren } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

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
}

const PaginationDiv: React.FC<Props> = ({handleChange}) =>{

  return <Pagination total={500} itemRender={itemRender} onChange={handleChange} />
}


export default PaginationDiv;
