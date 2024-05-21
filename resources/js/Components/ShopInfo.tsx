import { Colors, Dimensions } from "@/utils/Config";
import { Row, Col, Flex, Typography } from "antd";
import React from "react";
import {
    CrownOutlined,
    CheckCircleOutlined,
    TruckOutlined,
    IssuesCloseOutlined,
} from "@ant-design/icons";
type Props = {};

function ShopInfo({}: Props) {
    return (
        <div
            style={{
                height: "270px",
                background: Colors.secondary,
            }}
        >
            <Row
                className={Dimensions.pagePaddingClass}
                style={{
                    height: "270px",
                }}
                align={"middle"}
            >
                <Col span={6}>
                    <Flex style={{}} gap={8}>
                        <Col>
                            {" "}
                            <CrownOutlined style={{ fontSize: 60 }} />
                        </Col>
                        <Col>
                            <Flex vertical>
                                <Typography.Title level={4}>
                                    High Quality
                                </Typography.Title>
                                <Typography.Paragraph>
                                    crafted from top materials
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Flex style={{}} gap={8}>
                        <Col>
                            <CheckCircleOutlined style={{ fontSize: 60 }} />
                        </Col>
                        <Col>
                            <Flex vertical>
                                <Typography.Title level={4}>
                                    Warranty Protection
                                </Typography.Title>
                                <Typography.Paragraph>
                                    Over 2 years
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Flex style={{}} gap={8}>
                        <Col>
                            <TruckOutlined style={{ fontSize: 60 }} />
                        </Col>
                        <Col>
                            <Flex vertical>
                                <Typography.Title level={4}>
                                    Free Shipping
                                </Typography.Title>
                                <Typography.Paragraph>
                                    Order over 150 $
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Flex>
                </Col>
                <Col span={6}>
                    <Flex style={{}} gap={8}>
                        <Col>
                            <IssuesCloseOutlined style={{ fontSize: 60 }} />
                        </Col>
                        <Col>
                            <Flex vertical>
                                <Typography.Title level={4}>
                                    24 / 7 Support
                                </Typography.Title>
                                <Typography.Paragraph>
                                    Dedicated support
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Flex>
                </Col>
            </Row>
        </div>
    );
}

export default ShopInfo;
