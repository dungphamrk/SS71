import { DashboardOutlined, DollarOutlined, FileOutlined, LeftOutlined, LineChartOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../redux/reducer/sideBarReducer';

export default function BT5() {
  const sideBarMode = useSelector((state: any) => state.sideBar);
  console.log(sideBarMode);
  let length = sideBarMode === 0 ? 200 : 50;
  const dispatch = useDispatch();
  
  return (
    <div style={{
      display: 'flex',
      gap: '30px',
      backgroundColor: 'rgb(4, 20, 51)',
      color: 'white',
      flexDirection: 'column',
      width: `${length}px`,
      fontSize: '25px',
      justifyContent: 'center',
      boxSizing: 'border-box',
      height: '500px',
      transition: 'width 0.3s ease',
      overflow: 'hidden', 
    }}>
      <a style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DashboardOutlined />
        {sideBarMode === 0 && <span>Bảng điều khiển</span>}
      </a>
      <a style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <UserOutlined />
        {sideBarMode === 0 && <span>Người dùng</span>}
      </a>
      <a style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DollarOutlined />
        {sideBarMode === 0 && <span>Tài sản</span>}
      </a>
      <a style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <LineChartOutlined />
        {sideBarMode === 0 && <span>Thống kê</span>}
      </a>
      <a style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FileOutlined />
        {sideBarMode === 0 && <span>Tài liệu</span>}
      </a>
      <a 
        href="javascript:void(0)" 
        onClick={() => dispatch(changeMode())}
        style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        {sideBarMode === 0 ?  <LeftOutlined /> : <RightOutlined/> }
      
      </a>
    </div>
  );
}
