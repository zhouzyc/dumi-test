import React, { useState, useEffect } from 'react';
import { Space, Tag, Button } from 'antd';


import { TableType } from '@/components/TableCustom/types';

import TableCustom from '@/components/TableCustom';
import DialogFunc from '@/components//TableCustom/Dialog';
import RemoteSelectFunc from '@/components/TableCustom/Select';
import AddButtonCustom from "@/components/BasicsBusinessCustom/ButtonGroup/AddButtonCustom"

import { getSelect,getProTable } from '@/services';
import './index.less';

interface ProportionItem {
  deptName?: string;
  projectName?: string;
  dateText?: string;
  decideTimeValue?: string;
  channelName?: string;
  positionName?: string;
  parkValue?: string;
  notParkValue?: string;
  note?: string;
}

const columns: TableType.Columns<any>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    // search: false,
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    title: '事业部',
    dataIndex: 'deptName',
    key: 'deptName',
    valueType: 'text',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    // search: false,
    // width: 120,
    // sorter: (a: any, b: any) => a - b,
  },
  {
    title: '项目',
    dataIndex: 'projectName',
    key: 'projectName',
    valueType: 'text',
    // search: false,
    // width: 120
  },
  {
    title: '生效时间',
    dataIndex: 'dateText',
    key: 'dateText',
    // search: false,
    valueType: 'date',
    render: (_, record) => {
      return <div>{record.dateText}</div>;
    },
  },
  {
    title: '判定时间',
    key: 'decideTimeValue',
    width: 120,
    dataIndex: 'decideTimeValue',
    // search: false,
    render: (_, row) => <Space>{123}</Space>,
  },
  {
    title: '销售渠道',
    dataIndex: 'channelName',
    key: 'dechannelNameptName',
    valueType: 'text',
    // search: false,
    // width: 120,
    // sorter: (a: any, b: any) => a - b,
  },
  {
    title: '岗位',
    dataIndex: 'positionName',
    key: 'positionName',
    valueType: 'select',
    renderFormItem: (item, props, form) => {
      let RemoteSelect = RemoteSelectFunc(getSelect, (item: any) => {
        return {
          value: item.id,
          label: item.name,
        };
      });
      return (
        <RemoteSelect  default={0} ></RemoteSelect>
      );
    },
    // search: false,
    // width: 120
  },
  {
    title: '车位-调整后',
    dataIndex: 'parkValue',
    key: 'parkValue',
    // search: false,
    valueType: 'text',
    // width: 120,
    // sorter: (a: any, b: any) => a - b,
  },
  {
    title: '非车位-调整后',
    dataIndex: 'notParkValue',
    key: 'notParkValue',
    // search: false,
    valueType: 'text',
    // width: 120
  },
  {
    title: '申请原因',
    dataIndex: 'note',
    key: 'note',
    valueType: 'text',
    // search: false,
    // width: ,
    renderFormItem: (item, props, form) => {
      return <AddButtonCustom onClick={() => {console.log(12344)}}></AddButtonCustom>
    }
  },
];

const rightOptions: TableType.Columns<any>[] = [
  {
    title: '操作1',
    width: 180,
    key: 'option3',
    valueType: 'option',
    fixed: 'right',
    render: (
      text: React.ReactNode,
      record: any,
      index: number,
      action: any,
    ) => {
      let Dialog = DialogFunc(getProTable)
      return (
        <Dialog />
      );
    },
    xxx: 123,
  },
];

const protable = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (params: any) => {
    getProTable().then(res => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDataSource(res.data.list);
      }, 1500);
    })
  };

  const onFormValuesChange = (
    changedValues: any,
    allValues: any,
    formRef: any,
  ) => {
    console.log(formRef.current.getFieldValue('deptName'));
  };

  // 15308047727
  return (
    <TableCustom<ProportionItem>
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      needRowSelection={true}
      rightOptions={rightOptions}
      onSubmit={onSubmit}
      search={true}
      onFormValuesChange={onFormValuesChange}
    ></TableCustom>
  );
};

export default protable;
