const friends = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
];

const whosOnline = friends => {
  let usernames = friends
    .filter(val => val.status === 'online')
    .map(el => el.username);
  console.log(usernames);
  return friends.reduce((acc, val) => {
    acc['online'] = usernames;
    return acc;
  }, {});
};

console.log(whosOnline(friends));
