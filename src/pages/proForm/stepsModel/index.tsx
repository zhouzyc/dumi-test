import React, { useState,useEffect,useRef } from 'react';
import { formConfigFun } from './define';
import { ProStepsFormCustom } from '@/components/ProFormCustom';
import { getOpthions } from '@/services';
import { Button,Form, message } from 'antd';
import { optionsType } from '@/components/ProFormCustom/types';
import { PlusOutlined } from '@ant-design/icons';

function proForm() {

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    message.success('调用成功');
  };


  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        <PlusOutlined />
        分布表单新建
      </Button>
      <ProStepsFormCustom
        formConfig={formConfigFun([])}
        modal={{
          visible:visible,
          onCancel:()=>{
            setVisible(false);
          }
        }}
        onSubmit={onSubmit}
      />
      <br/>
      <Button type="primary" onClick={() => setVisible1(true)}>
        <PlusOutlined />
        Drawer分布表单新建
      </Button>
      <ProStepsFormCustom
        formConfig={formConfigFun([])}
        modal={{
          mode:'Drawer',
          width:500,
          visible:visible1,
          onCancel:()=>{
            setVisible1(false);
          }
        }}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default proForm;
