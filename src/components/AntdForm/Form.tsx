import React, { useEffect } from 'react'
import { FormProps } from 'antd/es/form';
import { ColProps } from 'antd/es/col';
import Linkage from 'antd-linkage'

import _ from 'lodash';

import { Form } from 'antd';

import Checkbox from './comp/Checkbox';
import AutoComplete from './comp/AutoComplete';
import InputNumber from './comp/InputNumber';
import DatePicker from './comp/DatePicker';
import Cascader from './comp/Cascader';
import Mentions from './comp/Mentions';
import Rate from './comp/Rate';
import Radio from './comp/Radio';
import Switch from './comp/Switch';
import Select from './comp/Select';
import TreeSelect from './comp/TreeSelect';
import TimePicker from './comp/TimePicker';
import Upload from './comp/Upload';
import Input from './comp/Input';
import Button from './comp/Button';

import { GetSystemParam } from './util';
import { FormItemFilter } from './enum';
import { FormItemInit, FormItemShare, JsonFormProps, fieldSource, FormLayout } from './FormType';



/**
 * form 支持的表单类型
 */
const FormType:{
  [k: string]: any
} = {
  button: Button,
  autocomplete: AutoComplete,
  checkbox: Checkbox,
  cascader: Cascader,
  datepicker: DatePicker,
  number: InputNumber,
  text: Input,
  password: Input.Password,
  textarea: Input.TextArea,
  search: Input.Search,
  rangepicker: DatePicker.RangePicker,
  mentions: Mentions,
  rate: Rate,
  radio: Radio,
  switch: Switch,
  select: Select,
  treeselect: TreeSelect,
  timepicker: TimePicker,
  upload: Upload,
}



/**
 *保存 自定义 form 参数
 */
const FormParam:string[] = [
  'isResetButton', 'fieldsSource', 'isEdit', 'loading'
]

/**
 * 处理组件功能
 * @param type 类型
 * @param prop props
 * @param data 带着数据
 */
const HandleComponent = (item: fieldSource, prop: any, data: FormItemShare) => {
  const props = prop
  const type = item.type && item.type.toLowerCase()
  // 设置编辑状态组件不可编辑
  if(item.isEditDisabled){
    props.disabled =  data.isEdit
  }
  
  // 如果加载中设置提交按钮加载状态
  if(type === 'button' && prop.htmlType === 'submit'){
    props.loading = data.loading
  }
  
  // 如果加载中设置重置按钮不可选
  if(type === 'button' && prop.htmlType === 'reset'){
    props.disabled = data.loading
  }

  // 搜索
  if(type === 'search' && !_.isFunction(props.onSearch)) {
    props.onSearch = data.onFinish
  }

  return props
}

/**
 * 初始化组件
 * @param item 
 * @param data 
 */
const InitComponent = (item: fieldSource, prop: any, data: FormItemInit) => {
  const props = prop
  const type = item.type && item.type.toLowerCase()
  // 重置功能
  if(type === 'button' && prop.htmlType === 'reset'){
    props.onClick = () => {
      data.form.resetFields()
      if(_.isFunction(data.onReset)){
        data.onReset()
      }
    }
  }
  return props
}

/**
 * 获取对应对组件
 * @param item 
 * @param data 
 */
const GetComponent = (item: fieldSource, data: FormItemShare):React.ReactNode => {
  const { type, props={} } = item
  const Component = FormType[_.isString(type) && type.toLowerCase() || 'input']
  
  // 如果提供了儿子级别那么他对优先级更高
  if(item.children){
    return item.children
  }

  // 无效组件
  if(Component === undefined){
    return <span>无效组件</span>
  }

  /**
   * 因为子元素可能有多个
   * 所以我们需要判断他是否是数组或者是对象
   */
 if(Array.isArray(props)){
    return props.map((v, k) => {
      // eslint-disable-next-line react/no-array-index-key
      return <Component key={k} item={item} {...HandleComponent(item, v, data)}/>
   })
  }
  return <Component item={item} {...HandleComponent(item, props, data)}/>
  
}

/**
 * 按钮部分布局判断
 * @param props 
 */
const OperationLayout = (props: any):ColProps => {
  // 判断
  if(props.htmlType === 'submit' || props.htmlType === 'reset'){
    return { span: 14, offset: 4 }
  }

  // 如果是数组
  if(Array.isArray(props)){
    if(props.find((item: { htmlType: string; }) => item.htmlType === 'submit' || item.htmlType === 'reset')){
      return { span: 14, offset: 4 }
    }
  }
  return {}
}
/**
 * 布局
 * @param formLayout 布局方式 'horizontal' | 'inline' | 'vertical'
 * @param labelCol   label 布局
 * @param wrapperCol 表单布局
 */
const ItemLayout = (formLayout: FormLayout, labelCol: ColProps, wrapperCol: ColProps ) => {
  return formLayout === 'horizontal' ? { labelCol, wrapperCol } : null;
}

/**
 * 对item 进行一些处理
 * @param item 表单的item
 * @param data data
 */
const HandleItem = (item: fieldSource, data: FormItemShare):fieldSource => {
  const { props={} } = item
  const newItem:{
    [key: string]: any
  } = {}
  const type = item.type && item.type.toLowerCase()
  /**
   * 如果是提交按钮
   * 就对布局特殊处理下
   */
  if(item.wrapperCol === undefined && data.layout === 'horizontal'){
    newItem.wrapperCol = OperationLayout(props)
  }

  /**
   * 设置Switch的checked不然运行会报错
   */
  if(type === 'switch' && item.valuePropName === undefined){
    newItem.valuePropName = 'checked'
  }

  return Object.assign(item,newItem)
}

/**
 * form Item
 * @param item item
 * @param node 组件
 * @param key key
 */
const FormItemLayout = (item: fieldSource, node: React.ReactNode, key: number): React.ReactNode => {
  return (
    <Linkage.Item key={key} bindfield={item.bindfield || []}>
      <Form.Item
        // 系统参数
        {...GetSystemParam(item, FormItemFilter)}
      >
        {node}
      </Form.Item>
    </Linkage.Item>
  )
}
/**
 * form 的 item 渲染
 * @param list 列表
 * @param data 数据
 */
const FormItem = (list: fieldSource[], data: FormItemShare) => {
  return list.map((item: fieldSource, key: number) => {
    /**
     * 判断编辑状态是否设置隐藏
     */
    if(data.isEdit && item.isEditHide){
      return ''
    }
    /**
     * 输出组件
     */
    return FormItemLayout(HandleItem(item, data), GetComponent(item, data), key)
  })
}

/**
 * 核心函数
 * @param param 
 */
const JsonForm = <T, U = {}>(param: JsonFormProps<T>) => {
  const [form] = Form.useForm();
  // 保存编辑器字段方面提交的时候直接修改成html格式数据
  const editorField:string[] = []
  const {
    wrapperCol={ span: 4 },
    labelCol={ span: 14 },
    fieldsSource=[],
    isEdit,
    loading,
    layout='horizontal',
    onReset,
    onFinish,
    children,
  } = param
  

  useEffect(() => {
    if(children) return
    // 对组件对值初始化
    fieldsSource.map((item: fieldSource) => {
      const type = item.type && item.type.toLowerCase()
      const newItem = item

      // 保存所有编辑器字段
      if(type === 'editor'){
        editorField.push(item.name || '')
      }

      if(_.isArray(newItem.props)){
        newItem.props = newItem.props.map((value) => InitComponent(item, value, { form, onReset }))
        return newItem
      }

      newItem.props = InitComponent(item, newItem.props, { form, onReset })
      return newItem
    })
  }, [])
  

  // 儿子存在不运行
  if(children){
    return <Form {...param}>
    {children}
  </Form>
  }

  const handleFinish = (values: any) => {
    const newValues = values
    
    // 把编辑器对内容转为html
    editorField.forEach(v => {
      if(!_.isUndefined(newValues[v])){
        newValues[v] = newValues[v].toHTML()
      }
    })

    if(_.isFunction(onFinish)){
      onFinish(newValues)
    }
  }

  // form Props
  const props: FormProps = {
    form,
    ...ItemLayout(layout, wrapperCol, labelCol),
    ...param,
    onFinish: handleFinish
  }
  
  return <Linkage>
    <Form {...GetSystemParam(props, FormParam)}>
      {FormItem(fieldsSource, { form, layout, isEdit, loading, onFinish })}
    </Form>
  </Linkage>
}

JsonForm.Item = Form.Item
export default JsonForm


