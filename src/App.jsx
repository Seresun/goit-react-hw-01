import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './userData.json';
import friendsData from './components/FriendList/friends.json';
import transactionsData from './components/TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactionsData} />
  </div>
);

export default App;
