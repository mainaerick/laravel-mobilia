import { Colors } from "@/utils/Config";
import { Flex, Typography } from "antd";
import React, { ReactNode } from "react";

type Props = { title: string; whichRoute: ReactNode;settings:any };

function Hero({ title, whichRoute,settings }: Props) {
    return (
        <div
            style={{
                position: "relative",
                height: "300px",
                width: "100%",
                textAlign:"left",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url("${settings.hero_image}")`,
                marginBottom: "",
            }}
        >
            <div
                style={{
                    display:"flex",
                    justifyContent:"center",
                    height:"300px"
                }}
            >
                <Flex
                    vertical
                    align={"center"}
                    justify={"center"}
                    // style={{
                    //     padding: "37px 13px 13px 13px",
                    // }}
                >
                    <Typography.Title
                        level={1}
                        style={{
                            textAlign: "center",
                            color: Colors.textBlackColor,
                            width: "100%",
                            fontWeight: "normal",
                        }}
                    >
                        {title}
                    </Typography.Title>

                    {whichRoute}
                </Flex>
            </div>
        </div>
    );
}

export default Hero;
