import s from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
