import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendlist}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
