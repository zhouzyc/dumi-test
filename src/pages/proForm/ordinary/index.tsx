import React, { useState,useEffect,useRef } from 'react';
import { formConfigFun } from './define';
import ProFormCustom from '@/components/ProFormCustom';
import { isLogin,getOpthions } from '@/services';
import { Form, message } from 'antd';
import ProForm, { ProFormText,ProFormFieldSet } from '@ant-design/pro-form';
import { optionsType , formConfigType} from '@/components/ProFormCustom/types';

function proForm() {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<optionsType[]>([]);
  const [show, setShow] = useState<boolean>(false);
  //定义一个实例变量
  const intervalRef = useRef<formConfigType[]>([]);
  const [update, setUpdate] = useState<number>(0);

  useEffect(()=>{
    (async ()=>{
      const { data } = await getOpthions();
      setOptions(data)
    })();

  },[]);

  const handledOnClick = () => {
    let length = intervalRef.current.length;
    intervalRef.current.push({
      mold:"ProFormText",
      name:`ProFormText.${length}`,
      label:"ProFormText"+length,
      rules:[
        { required: true, message: '请输入正确值' }
      ]
    });
    setUpdate(update + 1);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    await isLogin();

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
    if(hangedValues.beginCityId){
      form.setFieldsValue({
        note: hangedValues.beginCityId,
        beginAreaId: null
      });
      setOptions([
        {
          label:'测试',
          value:11111
        }
      ]);
      setShow(true);
    }
  };

  return (
    <>
      <ProFormCustom
        form={form}
        formConfig={formConfigFun(options,show,intervalRef,handledOnClick)}
        onValuesChange={onValuesChange}
        onSubmit={onSubmit}
        initialValues={initialValues}
      />
    </>
  );
}

export default proForm;
