import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/reducer/heartModeReducer';
interface User {
  id:number,
  name:string,
  favorite:Boolean
}
export default function BT7() {
  const users = useSelector((state:any) => state.heartMode.users);
  const dispatch = useDispatch();

  const handleToggleFavorite = (userId:number) => {
    dispatch(toggleFavorite(userId));
  };

  return (
    <div>
      <h3>List Favorite User</h3>
      {users.map((user:User) => (
        <div key={user.id}>
          <p>User name: {user.name}</p>
          <p>
            Favorite: <a href="javascript:void(0)" onClick={() => handleToggleFavorite(user.id)}>
              {user.favorite ? <HeartFilled /> : <HeartOutlined />}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
