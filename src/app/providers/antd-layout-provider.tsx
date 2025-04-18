import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { PropsWithChildren } from 'react';

export const AntdLayoutProvider = (props: PropsWithChildren) => {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        components: {
          Button: {
            boxShadow: 'none',
          },
          Form: {
            itemMarginBottom: 8,
          },
        },
        token: {
          fontFamily: 'Montserrat, sans-serif',
          colorPrimary: '#2476fb',
          borderRadius: 12,
          boxShadow: 'none',
          controlHeight: 36,
          // colorBgBase:
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};
