import { Colors, Dimensions } from "@/utils/Config";
import { Row, Col, Flex, Typography, Input, Button, Divider } from "antd";
import React from "react";
import { Link } from "react-alice-carousel";

type Props = { };

function Footer({ }: Props) {
    return (
        <>
            <Divider />
            <div className={Dimensions.pagePaddingClass}>
                <div
                    style={{
                        height: "auto",
                        paddingBottom: "37px",
                    }}
                >
                    <Row
                        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                        align={"top"}
                    >
                        <Col span={8}>
                            <Row>
                                <Col span={12}>
                                    <Flex gap={50} vertical>
                                        <Typography.Title level={5}>
                                            Mobilia
                                        </Typography.Title>
                                        <Typography.Paragraph
                                            style={{
                                                color: Colors.textGrayColor,
                                            }}
                                        >
                                            400 University Drive Suite 200 Coral
                                            Gables, FL 33134 USA
                                        </Typography.Paragraph>
                                    </Flex>{" "}
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Row>
                                <Col span={8}>
                                    <Flex vertical gap={50}>
                                        <Typography.Text
                                            style={{
                                                color: Colors.textGrayColor,
                                            }}
                                        >
                                            Links
                                        </Typography.Text>

                                        <Link href={"home"}>
                                            <Typography.Text strong>
                                                Home
                                            </Typography.Text>
                                        </Link>
                                        <Link href={"shop"}>
                                            <Typography.Text strong>
                                                Shop
                                            </Typography.Text>
                                        </Link>
                                        <Link href={"about"}>
                                            <Typography.Text strong>
                                                About
                                            </Typography.Text>
                                        </Link>
                                        <Link href={"contact"}>
                                            <Typography.Text strong>
                                                Contact
                                            </Typography.Text>
                                        </Link>
                                    </Flex>
                                </Col>

                                <Col span={6}>
                                    <Flex vertical gap={50}>
                                        <Typography.Text
                                            style={{
                                                color: Colors.textGrayColor,
                                            }}
                                        >
                                            Help
                                        </Typography.Text>

                                        <Link href={""}>
                                            <Typography.Text strong>
                                                Payment Options
                                            </Typography.Text>
                                        </Link>
                                        <Link href={""}>
                                            <Typography.Text strong>
                                                Returns
                                            </Typography.Text>
                                        </Link>
                                        <Link href={""}>
                                            <Typography.Text strong>
                                                Privacy Policies
                                            </Typography.Text>
                                        </Link>
                                    </Flex>
                                </Col>
                                <Col span={10}>
                                    <Flex vertical gap={50}>
                                        <Typography.Text
                                            style={{
                                                color: Colors.textGrayColor,
                                            }}
                                        >
                                            NewsLetter
                                        </Typography.Text>
                                        <Flex gap={9} align={"flex-end"}>
                                            <Input placeholder="Enter our email address" />
                                            <Button type="text">
                                                <Typography.Text strong>
                                                    Subscribe
                                                </Typography.Text>
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Footer;
