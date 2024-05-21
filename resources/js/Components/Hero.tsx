import { Colors } from "@/utils/Config";
import { Flex, Typography } from "antd";
import React from "react";

type Props = { title: string; whichRoute: string };

function Hero({ title, whichRoute }: Props) {

    
    return (
        <div
            style={{
                position: "relative",
                height: "300px",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url("/images/home_hero.png")`,
                marginBottom: "",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    // right: "50%",
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

                    <Typography.Text>{whichRoute}</Typography.Text>
                </Flex>
            </div>
        </div>
    );
}

export default Hero;
