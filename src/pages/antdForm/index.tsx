import React from 'react';
import AntdForm from "@/components/AntdForm";
import { message } from 'antd';

const fieldsSource = [
  {
    type: 'search',
    props: {placeholder: '搜索试试'}
  },
  { 
    name: 'user',
    type: 'text', 
    label: '姓名', 
    rules: [{ required: true, message: "姓名不能为空" }], 
    props: { placeholder: '请输入姓名' },
  },
  { 
    name: 'pass', 
    type: 'password', 
    label: '密码', 
    props: { placeholder: '请输入密码' },
    tooltip: '至少6个字符'
  },
  {
    name: 'date',
    type: "datepicker",
    label: '生日',
  },
  {
    name: 'sex',
    type: "radio",
    label: '性别',
    props: {
      options: [
        { label: "男", value: "1" },
        { label: "女", value: "2" },
      ]
    },
  },
  {
    name: 'age',
    type: 'number',
    label: '年龄'
  },
  {
    name: 'like',
    type: "select",
    label: '爱好',
    props: {
      options: [
        { label: '篮球', value: 'basketball' },
        { label: '足球', value: 'football' },
        { label: '保龄球', value: 'bowling' },
      ]
    },
    tooltip: '选择篮球后，就会出现备注'
  },
  {
    name: "remark",
    type: "textarea",
    label: "备注",
    bindfield: [ // 联动字段
      { field: 'like', value: ['basketball'] },
    ],
    props: { 
      tooltip: '至少两个字符'
    },
  },
  {
    type: 'rangepicker',
    name: 'times',
    label: '毕业时间'
  },
  {
    name: 'other',
    label: "自定义内容",
    children: <><input /></>,
  },
  {
    name: 'img',
    type: 'upload', 
    label: '图片', 
    help: "仅支持图片",
    props: {
      fileStyle: "images",
      fileText: ' ', //"上传图片",
      action: "/Enter/public/upload",
      fileType: ['image/jpeg', 'image/png'],
      error: "上传失败",
      getError: (err: string, props: { fileType: any; size: any; }) => {
        if(err === "type"){
          message.error(`上传类型错误只能上传的类型为${props.fileType}`)
        }
        if(err === 'size'){
          message.error(`最大上传为${props.size}MB`)
        }
      },
    },
  },
  { 
    type: 'Button', 
    props: { type: 'primary', htmlType: 'submit', children: '提交' } 
  },
]


const antdForm = () => {
  return (
    <>
      <AntdForm layout='horizontal' fieldsSource={fieldsSource} />
    </>
  )
}

export default antdForm;