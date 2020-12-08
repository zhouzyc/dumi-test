import React from 'react';
import { PropsType } from '../types';
import ProForm, { ModalForm,DrawerForm } from '@ant-design/pro-form';
import ComponentCustom from '../component';
import { Form } from 'antd';
import { setFormDefault, setFinishFailed, defaultConfig } from '../define';

function ProFormCustom(props: PropsType) {
  let {
    labelAlign,
    size,
    searchConfig,
    resetButtonProps,
    submitButtonProps,
    onSubmit,
    onValuesChange,
    formConfig,
    initialValues,
    form,
    layout,
    requiredMark,
    modal,
  } = props;


  $global.log('进入表单开始渲染');
  const onFinish = async (data: any) => {
    try {
      let param: any = {};

      setFormDefault(param, formConfig, data);

      await onSubmit(param);
    } catch (e) {
      console.log(e);
    }
  };
  const onFormCancel = async () => {

    try {
      //如果是表单并且有取消回调
      // @ts-ignore
      if (modal.onCancel && typeof modal.onCancel === 'function') {
        // @ts-ignore
        modal.onCancel();
      }

    } catch (e) {
      console.log(e);
    }
  };
  // @ts-ignore
  const onFinishFailed = async (err) => {
    setFinishFailed(err);
  };

  //处理按钮配置
  let submitter = {
    searchConfig: searchConfig || defaultConfig.searchConfig,
    resetButtonProps: resetButtonProps ? resetButtonProps : defaultConfig.resetButtonProps,
    submitButtonProps: submitButtonProps || defaultConfig.submitButtonProps,
  };
  if (!submitter.resetButtonProps) {
    delete submitter.resetButtonProps;
  }
  if (!submitter.submitButtonProps) {
    delete submitter.submitButtonProps;
  }

  //处理弹窗配置
  let modalConfig: any = {};
  if (modal) {
    if (modal.title) {
      modalConfig.title = modal.title;
    } else {
      modalConfig.title = defaultConfig.modal?.title;
    }if (modal.width) {
      modalConfig.width = modal.width;
    } else {
      modalConfig.width = defaultConfig.modal?.width;
    }
    if (modal.trigger) {
      modalConfig.trigger = modal.trigger;
    } else {
      modalConfig.trigger = defaultConfig.modal?.trigger;
    }
    if (modal.visible !== undefined) {
      modalConfig.visible = modal.visible;
    }
    if (modal.onCancel) {
      modalConfig.onVisibleChange = modal.onCancel;
    }
  }

  let CustomProForm: any = ProForm;

  //处理弹窗类型
  if (modal) {
    if(modal.mode === 'Drawer'){
      CustomProForm = DrawerForm;
    }else {
      CustomProForm = ModalForm;
    }
  }

  return (
    <>
      <CustomProForm
        {...modalConfig}
        layout={layout || defaultConfig.layout}
        form={form}
        labelAlign={labelAlign || defaultConfig.labelAlign}
        size={size || defaultConfig.size}
        requiredMark={requiredMark || defaultConfig.requiredMark}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initialValues || defaultConfig.initialValues}
        onValuesChange={onValuesChange}
        submitter={submitter}
      >
        <ComponentCustom {...props} form={form}/>
      </CustomProForm>
    </>
  );
}

export default ProFormCustom;
