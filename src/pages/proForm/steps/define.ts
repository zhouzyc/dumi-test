import { formStepsChildrenConfigType } from '@/components/ProFormCustom/types';

export const formConfigFun = (options: any) => {

  let config: formStepsChildrenConfigType[] = [
    {
      title: '第一步',
      name: 'a',
      stepsChildren: [
        {
          children: [
            {
              mold: 'ProCard',
              fieldProps: {
                title:"卡片1",
                bordered: true,
                headerBordered: true,
                collapsible: true,
                style: {
                  marginBottom: 16,
                  minWidth: 920,
                  maxWidth: '100%',
                }
              },
              children:[
                {
                  mold: 'ProCard',
                  fieldProps: {
                    title:"卡片2",
                    bordered: true,
                    headerBordered: true,
                    collapsible: true,
                    style: {
                      marginBottom: 16,
                      minWidth: 620,
                      maxWidth: '100%',
                    }
                  },
                  children:[
                    {
                      mold: 'ProCard',
                      fieldProps: {
                        title:"卡片3",
                        bordered: true,
                        headerBordered: true,
                        collapsible: true,
                        style: {
                          marginBottom: 16,
                          minWidth: 320,
                          maxWidth: '100%',
                        }
                      },
                      children:[
                        {
                          mold: 'ProFormText',
                          name: 'name11',
                          label: 'name11'
                        },
                      ]
                    }
                  ]
                }
              ]
            },
            {
              mold: 'ProCard',
              fieldProps: {
                title:"卡片11",
                bordered: true,
                headerBordered: true,
                collapsible: true,
                style: {
                  marginBottom: 16,
                  minWidth: 320,
                  maxWidth: '100%',
                }
              },
              children:[
                {
                  mold: 'ProFormText',
                  name: 'name111',
                  label: 'name111'
                },
              ]
            }
          ],
        },
      ],
    },
    {
      title: '第二步',
      name: 'b',
      stepsChildren: [
        {
          children: [
            {
              mold: 'ProFormText',
              name: 'name2',
              label: 'name2'
            },
          ],
        },
      ],
    },
    {
      title: '第三步',
      name: 'c',
      stepsChildren: [
        {
          children: [
            {
              mold: 'ProFormText',
              name: 'name3',
              label: 'name3'
            },
          ],
        },
      ],
    },
  ];
  return config;
};

