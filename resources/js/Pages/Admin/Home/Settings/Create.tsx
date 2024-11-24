import React, {useEffect, useState} from 'react';
import { useForm } from '@inertiajs/react';
import {Form, Input, Upload, Button, ColorPicker, message, GetProp, ColorPickerProps} from 'antd';
import AuthenticatedAdmin from "@/Layouts/AdminLayout";
type Props = {auth:any,settings:any,success:string}
type Color = GetProp<ColorPickerProps, 'value'>;
const  Create: React.FC<Props> = ({auth,settings,success }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const { data, setData, post, errors }:any = useForm({
        hero_image: null,
        logo: null,
        living:null,
        dining:null,
        bedroom:null,
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
            },onError: (e:any) => {
                console.log(e)
                messageApi.open({
                    type: "error",
                    content: "An error occurred "+e.hero_image+" "+e.logo,
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
          <Form.Item label="Dining">
              <Upload
                  beforeUpload={(file) => {
                      setData('dining', file);
                      return false;
                  }}
              >
                  <Button>Upload Dining</Button>
              </Upload>
          </Form.Item>
          <Form.Item label="Bedroom">
              <Upload
                  beforeUpload={(file) => {
                      setData('bedroom', file);
                      return false;
                  }}
              >
                  <Button>Upload Bedroom</Button>
              </Upload>
          </Form.Item>
          <Form.Item label="Living">
              <Upload
                  beforeUpload={(file) => {
                      setData('living', file);
                      return false;
                  }}
              >
                  <Button>Upload Living</Button>
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
          {settings.inspiration_images &&
              JSON.parse(settings.inspiration_images).map((img:any, index:number) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                      <img
                          src={`${img}`}
                          alt={`Inspiration ${index + 1}`}
                          style={{ maxWidth: '150px', marginRight: '10px' }}
                      />
                  </div>
              ))}
          <Upload
              listType="picture"
              multiple
              beforeUpload={(file) => {
                  const files = data.inspiration_images || [];
                  setData('inspiration_images', [...files, file]);
                  return false;
              }}
          >
              <Button>Add Inspiration Images</Button>
          </Upload>
          <Form.Item>
              <Button type="primary" htmlType="submit">
                  Save Settings
              </Button>
          </Form.Item>
      </Form></AuthenticatedAdmin>
  )
}

export default Create
