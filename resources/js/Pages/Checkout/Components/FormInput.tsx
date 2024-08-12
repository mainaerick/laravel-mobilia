import { Form, Input } from "antd";
import React from "react";

type Props = { name: string; label: string; type?: string; required: boolean };

function FormInput({ name, label, type, required }: Props) {
    return (
        <Form.Item name={name} label={label} rules={[{ required: required }]}>
            <Input style={{marginTop:"13px",borderRadius:"9px"}} size="large"/>
        </Form.Item>
    );
}

export default FormInput;
