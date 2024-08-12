import { Dimensions } from "@/utils/Config";
import { Typography } from "antd";
import React from "react";

type Props = { description: string };

function Description({ description }: Props) {
    return (
        <div >
            <div style={{
                maxHeight: 400,
                overflow: "auto",
                padding: "0 16px",
            }} className={Dimensions.pagePaddingClass}>
                {" "}
                <Typography.Paragraph>{description}</Typography.Paragraph>
            </div>
        </div>
    );
}

export default Description;
