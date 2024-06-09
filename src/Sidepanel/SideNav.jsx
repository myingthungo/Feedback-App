import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Survey from '../SurveyForms/Survey';
import NewForm from '../SurveyForms/NewForm';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }) => {
    console.log('Clicked menu item:', key);
    setSelectedComponent(key);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case '1':
        return <Survey />;
      case '2':
        return <NewForm />;
      default:
        return null;
    }
  };

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Product Feedback Survey',
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Feedback Form',
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Components',
    },
    {
      key: 'sub1',
      label: 'Questions and Answers',
      icon: <MailOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: '7',
          label: 'Option 7',
        },
        {
          key: '8',
          label: 'Option 8',
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Registration Forms',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: collapsed ? 80 : 256,
          transition: 'width 0.3s',
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
            width: 40,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleMenuClick} // Handle menu item clicks
        />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>{renderComponent()}</div>
    </div>
  );
};

export default App;
