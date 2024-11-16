import React, {useEffect, useState} from 'react';
import { useForm } from '@inertiajs/react';
import {Form, Input, Upload, Button, ColorPicker, message, GetProp, ColorPickerProps} from 'antd';
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
type Props = {}
type Color = GetProp<ColorPickerProps, 'value'>;
const  Create: React.FC<Props> = ({auth,settings,success }) => {
    console.log(settings)
    const [messageApi, contextHolder] = message.useMessage();
    const { data, setData, post, errors }:any = useForm({
        hero_image: null,
        logo: null,
        primary_color: settings.primary_color || '#ffffff',
        secondary_color: settings.secondary_color || '#000000',
    });

    const handleSubmit = (value:any) => {
        console.log(value);
        post(route('admin.settings.update'), {
            onSuccess: () => {
                messageApi.open({
                    type: "success",
                    content: "Product Updated",
                });
            },onError: (e) => {
                console.log(e)
                messageApi.open({
                    type: "error",
                    content: "An error occurred",
                });
            },});


    };


    return (
        <AuthenticatedAdmin
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Configure App
                </h2>
            }
        >
            {contextHolder}
      <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Hero Image">
              <Upload
                  beforeUpload={(file) => {
                      setData('hero_image', file);
                      return false;
                  }}
              >
                  <Button>Upload Hero Image</Button>
              </Upload>
          </Form.Item>

          <Form.Item label="Logo">
              <Upload
                  beforeUpload={(file) => {
                      setData('logo', file);
                      return false;
                  }}
              >
                  <Button>Upload Logo</Button>
              </Upload>
          </Form.Item>

          <Form.Item label="Primary Color">
              <ColorPicker
                  value={data.primary_color}
                  onChange={(value) => setData('primary_color', value.toHexString())}
              />
          </Form.Item>

          <Form.Item label="Secondary Color">
              <ColorPicker
                  value={data.secondary_color}
                  onChange={(value) => setData('secondary_color', value.toHexString())}
              />
          </Form.Item>

          <Form.Item>
              <Button type="primary" htmlType="submit">
                  Save Settings
              </Button>
          </Form.Item>
      </Form></AuthenticatedAdmin>
  )
}

export default Create
