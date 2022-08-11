import Profile from './Profile/Profile';
import user from 'data/user.json';

export const App = () => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      ;
    </>
  );
};

// export const App = () => {
//   return (
//     <>
//       <Profile {...user} />;
//     </>
//   );
// };
