import { formChildrenConfigType} from '@/components/ProFormCustom/types';
import React from 'react';

export const formConfigFun = (options:any)=>{


  let config:formChildrenConfigType[] = [
    {
      children:[
        {
          mold:"ProFormText",
          name:"jobnumber",
          label:"工号",
          tooltip:'我是提示消息不无法解析html<br>hahahahah',
          placeholder:"今天是和好日子",
          fieldProps:{
            maxLength:10
          }
        },
        {
          mold:"ProFormText.Password",
          name:"password",
          label:"密码",
          tooltip:{
            title:'<a href="www.baidu.com"></a>'
          },
          fieldProps:{
            maxLength:10
          },
          disabled:true
        },
        {
          mold:"ProFormDigit",
          name:"InputNumber",
          label:"InputNumber",
          min:1,
          max:10
        },
        {
          mold:"ProFormText",
          name:"jobnumber1",
          label:"工号1",
          validateStatus:'warning',
          hasFeedback:true,
          help:'自定义信息'
        },
      ]
    },
    {
      title:'分组标题',
      children:[
        {
          mold:"ProFormDatePicker",
          name:"date",
          label:"日期"
        },
        {
          mold:"ProFormDateTimePicker",
          name:"datetime",
          label:"日期",
        },
        {
          mold:"ProFormDateRangePicker",
          name:"datetimeRange",
          label:"日期",
        },
        {
          mold:"ProFormTimePicker",
          name:"time",
          label:"时间",
        },
      ]
    },
    {
      title:'分组标题',
      children:[
        {
          mold:"ProFormSelect",
          name:"select",
          label:"select",
          readonly:true,
          showSearch:true,
          allowClear:true,
          disabled:true,
          options:[
            {
              label: 'item 1',
              value: 1,
            },
            {
              label: 'item 2',
              value: 2,
            },
          ]
        },
        {
          mold:"ProFormSelect",
          name:"select1",
          label:"select1",
          hasFeedback:true,
          valueEnum:{
            man: '男',
            woman: '女',
          }
        },
        {
          mold:"ProFormCheckbox.Group",
          name:"checkbox",
          label:"行业分布",
          options:[
            {
              label: 'item 1',
              value: 'a',
            },
          ]
        },
        {
          mold:"ProFormRadio.Group",
          name:"radio-group",
          label:"radio-group",
          radioType:'button',
          width:'l',
          options:[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]
        },
      ]
    },
    {
      title:'上传分组',
      children:[
        {
          mold:"ProFormUploadButton",
          name:"upload",
          label:"upload",
          action:"/api/upload"
        },
        {
          mold:"ProFormUploadDragger",
          name:"Dragger",
          label:"Dragger",
          action:"/api/dragger"
        }
      ]
    }
  ];
  return config;
};

