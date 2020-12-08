import React, { useState, useCallback } from 'react';

import { Modal } from 'antd';

import './index.less';

interface DialogPropType {
  okText?: string;
  cancelText?: string;
  ModalText?: string;
  title?: string;
  btnName?: string;
}

const DialogFunc = (apiSubmit: Function) => {
  return (props: DialogPropType) => {
    const { okText, cancelText, ModalText, title, btnName } = props;
    const [visible, setVisible] = useState<boolean | undefined>(false);
    const [DialogLoading, setDialogLoading] = useState<boolean | undefined>(
      false,
    );

    const handleCancel = () => {
      setVisible(false);
      setDialogLoading(false);
    };

    const showDialog = () => setVisible(true);

    const handleOk = useCallback(() => {
      setDialogLoading(true);
      const promise: Promise<any> = apiSubmit();
      promise.then(
        res => handleCancel(),
        err => console.log(err),
      );
    }, [apiSubmit]);

    return (
      <>
        <span className="btn-text" onClick={showDialog}>
          {btnName || '操作'}
        </span>
        <Modal
          className="option-Dialog"
          title={title || 'title'}
          visible={visible}
          onOk={handleOk}
          confirmLoading={DialogLoading}
          onCancel={handleCancel}
          okText={okText}
          cancelText={cancelText}
          maskClosable={false}
        >
          <p className="">{ModalText || '确认进行操作?'}</p>
        </Modal>
      </>
    );
  };
};

export default DialogFunc;
