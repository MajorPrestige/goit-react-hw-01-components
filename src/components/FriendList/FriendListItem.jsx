import s from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className={s.item}>
      <span className={friend.isOnline ? s.online : s.offline}></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  ));
};

export default FriendListItem;

FriendListItem.defaultProps = {
  friends: [],
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
