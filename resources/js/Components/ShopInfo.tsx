import { Colors, Dimensions } from "@/utils/Config";
import { Row, Col, Flex, Typography, Divider } from "antd";
import React from "react";
import {
    CrownOutlined,
    CheckCircleOutlined,
    TruckOutlined,
    IssuesCloseOutlined,
} from "@ant-design/icons";
type Props = {};

function ShopInfo({ }: Props) {
    return (
        <div
            style={{
                height: "370px",
                background: Colors.secondary,
            }}
        >
            <Row
                className={Dimensions.pagePaddingClass}
                style={{
                    height: "370px",
                }}
                align={"middle"}
                justify={"space-between"}
            >
                <Col sm={{ span: 24 }} md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}>
                    <Row align={"middle"} gutter={12} justify={"start"}>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <CrownOutlined style={{ fontSize: 40 }} />
                        </Col>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <Flex vertical>
                                <Typography.Title level={5}>
                                    High Quality
                                </Typography.Title>
                                <Typography.Paragraph >
                                    crafted from top materials
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Row>

                </Col>

                <Col sm={{ span: 24 }} md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}>
                    <Row align={"middle"} gutter={12} justify={"space-between"} >
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <CheckCircleOutlined style={{ fontSize: 40 }} />
                        </Col>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <Flex vertical>
                                <Typography.Title level={5}>
                                    Warranty Protection
                                </Typography.Title>
                                <Typography.Paragraph>
                                    Over 2 years
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }} >
                    <Row align={"middle"} gutter={12} justify={"space-between"}>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <TruckOutlined style={{ fontSize: 40 }} />
                        </Col>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <Flex vertical>
                                <Typography.Title level={5}>
                                    Free Shipping
                                </Typography.Title>
                                <Typography.Paragraph>
                                    Order over Ksh 15000
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }}
                     lg={{ span: 6 }}
                     xl={{ span: 6 }}>
                    <Row align={"middle"} gutter={12} justify={"space-between"}>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <IssuesCloseOutlined style={{ fontSize: 40 }} />
                        </Col>
                        <Col
                            sm={{ span: 24 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <Flex vertical>
                                <Typography.Title level={5}>
                                    24 / 7 Support
                                </Typography.Title>
                                <Typography.Paragraph>
                                    Dedicated support
                                </Typography.Paragraph>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default ShopInfo;
