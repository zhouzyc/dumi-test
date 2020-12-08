import React, { useState,useEffect,useRef } from 'react';
import { formConfigFun } from './define';
import { ProStepsFormCustom } from '@/components/ProFormCustom';
import { getOpthions } from '@/services';
import { Form, message } from 'antd';
import { optionsType } from '@/components/ProFormCustom/types';

function proForm() {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<optionsType[]>([]);


  useEffect(()=>{
    (async ()=>{
      const { data } = await getOpthions();
      setOptions(data)
    })();

  },[]);


  const onSubmit = async (data: any) => {
    console.log(data);
    message.success('调用成功');
  };


  return (
    <>
      <ProStepsFormCustom
        form={form}
        formConfig={formConfigFun(options)}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default proForm;
