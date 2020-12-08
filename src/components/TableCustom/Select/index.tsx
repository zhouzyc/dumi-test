import React, { useEffect, useState } from 'react';
import Select from '@/components/CustomForm/Select';
import {deepClone} from "@/models/tool"

interface OptionsConfig {
  value: any;
  label: string;
}

interface SelectProps {
  default: any;
  options?: OptionsConfig[];
}

const RemoteSelectFunc = (apiGetOptions: Function, formatter: any) => {
  return (props: SelectProps) => {
    const [options, setOptions] = useState<OptionsConfig[]>([]);
    let isUnmounted = false
    useEffect(() => {
      apiGetOptions().then(
        (res: any) => {
          // 引入状态标识, 保证卸组件载后不在更新state
          if (!isUnmounted) setOptions(res.data.map((item: any) => formatter(item)))
        },
        (err: any) => {},
      );
      return function cleanup() {
        isUnmounted = true
      };
    }, []);
    return (
      <Select
        default={props.default}
        options={options}
        placeholder="请选择"
      ></Select>
    );
  };
};

export default RemoteSelectFunc;
