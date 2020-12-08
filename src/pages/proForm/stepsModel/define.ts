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
              mold: 'ProFormText',
              name: 'name1',
              label: 'name1'
            },
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

