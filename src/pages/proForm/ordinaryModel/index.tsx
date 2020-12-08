import React, { useState,useEffect,useRef } from 'react';
import { formConfigFun } from './define';
import ProFormCustom from '@/components/ProFormCustom';
import { isLogin,getOpthions } from '@/services';
import { Form, message,Button } from 'antd';
import ProForm, { ProFormText,ProFormFieldSet } from '@ant-design/pro-form';
import { optionsType , formConfigType} from '@/components/ProFormCustom/types';
import { PlusOutlined } from '@ant-design/icons';

function proForm() {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<optionsType[]>([]);
  //定义一个实例变量

  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    (async ()=>{
      const { data } = await getOpthions();
      setOptions(data)
    })();

  },[]);


  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  const onSubmit = async (data: any) => {
    console.log(data);
    await isLogin();
    await waitTime(2000);
    message.success('调用成功');
  };
  const initialValues = {
    InputNumber: 1,
    select: 1,
    note: 'ddd',
    InputAutoCompleteCustom: 'ddd',
    // SelectInputCustom: [1,"2222aaa"]
  };

  //监听表单变化
  const onValuesChange = (hangedValues: any, values: any) => {
    console.log('监听值变化');

  };

  const btn = (
      <Button type="primary">
        <PlusOutlined/>
        新建表单
      </Button>
  );
  const Drawer = (
    <Button type="primary">
      <PlusOutlined/>
      Drawer新建表单
    </Button>
  );
  return (
    <>
      <ProFormCustom
        form={form}
        modal={{
          mode:'Drawer',
          title:"Drawer",
          width:500,
          //内联按钮专用
          trigger:Drawer,
        }}
        formConfig={formConfigFun(options)}
        onValuesChange={onValuesChange}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
      <br/>
      <Button type="primary" onClick={() => setVisible(true)}>
        <PlusOutlined />
        自定义关联按钮
      </Button>
      <br/>
      <ProFormCustom
        form={form}
        modal={{
          title:"弹窗表单1",
          width:500,
          //内联按钮专用
          trigger:btn,
        }}
        formConfig={formConfigFun(options)}
        onValuesChange={onValuesChange}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
      <ProFormCustom
        form={form}
        modal={{
          title:"弹窗表单2",
          width:500,
          //自定义关联配置
          visible:visible,
          onCancel:()=>{
            console.log(visible);
            setVisible(false);
          }
        }}
        formConfig={formConfigFun(options)}
        onValuesChange={onValuesChange}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </>
  );
}

export default proForm;
