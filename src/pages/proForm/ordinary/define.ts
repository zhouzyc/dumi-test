import { formChildrenConfigType} from '@/components/ProFormCustom/types';
import React from 'react';

export const formConfigFun = (options:any,show:boolean,intervalRef:any,onClick:any = null)=>{


  let children = [...intervalRef.current];


  let config:formChildrenConfigType[] = [
    {
      title:'自定义组件1',
      children:[
        {
          mold:"InputTooltipCustom",
          label:"输入框Tooltip组合",
          name:"InputTooltipCustom",
          onClick:onClick,
          rules:[
            { required: true, message: '填写内容' }
          ],
          tooltipTitle:'xxxxx',
          fieldProps:{
            className:'cccc',
          },
        },
        {
          mold:"InputSelectCustom",
          label:"Input组合Select",
          name:"InputSelectCustom",
          options:options,
          rules:[
            { required: true, message: '填写内容' },
            {
              validator: async (rule: any, value: any) => {
                  if (value && (!value[0] || !value[1])) {
                    return Promise.reject('至少填写两个');
                  }
              },
            },
          ],
        },
        {
          mold:"InputAutoCompleteCustom",
          label:"输入框自动完成",
          name:"InputAutoCompleteCustom",
          // readonly:true,
          // disabled:true,
          rules:[
            { required: true, message: '填写内容' }
          ],
          options:[
            {
              label:'城市1',
              value:'城市1',
            },
            {
              label:'城市2',
              value:'城市2',
            }
          ]
        },
      ]
    },
    {
      title:'自定义组件',
      children:[
        {
          mold:"AddButtonCustom",
          className:"ddd",
          label:"AddButtonCustom",
          onClick:onClick
        },
        {
          mold:"ProFormFieldSet",
          name:"ProFormFieldSet",
          label:"ProFormFieldSet",
          // rules:[
          //   { required: true, message: '请输入正确值' },
          //   {
          //     validator: async (rule:any, value:any) => {
          //       if (!value || value.length < 2) {
          //         return Promise.reject('至少填写两个');
          //       }
          //     },
          //   }
          // ],
          children:children,
        },
      ]
    },
    {
      title:'联动',
      children:[
        {
          mold:"ProFormText",
          name:"note",
          label:"note"
        },
        {
          mold:"ProFormSelect",
          name:"beginCityId",
          label:"出发城市",
          tooltip:'必须',
          placeholder:'请输入出发城市',
          options:[
            {
              label:'城市1',
              value:1,
            },
            {
              label:'城市1',
              value:2,
            }
          ]
        },
        {
          mold:"ProFormSelect",
          name:"beginAreaId",
          label:"出发区域",
          tooltip:'必须',
          placeholder:'请输入出发城市',
          options:options,

        },
        {
          moldShow:show,
          mold:"ProFormSelect",
          name:"beginAreaId1",
          label:"出发区域1",
          placeholder:'请输入出发城市',
          options:options,
        },
      ]
    },
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
          },
          rules:[
            // { required: true, message: '请输入正确工号1' },
            // {
            //   validator(rule:any, value:any){
            //     if (!value || value > 5) {
            //       return Promise.resolve();
            //     }
            //     return Promise.reject('请输入正确工号2');
            //   }
            // },
            // (event:any) => ({
            //   validator(rule:any, value:any) {
            //     if (!value || value < 5 || value > 10 ) {
            //       return Promise.resolve();
            //     }
            //     return Promise.reject('请输入正确工号3');
            //   }
            // }),
          ]
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

