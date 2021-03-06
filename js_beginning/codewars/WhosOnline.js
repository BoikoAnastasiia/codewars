const friends = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 110,
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
  friends.forEach(el =>
    el.lastActivity > 10 && el.status === 'online' ? (el.status = 'away') : null
  );

  const online = friends
    .filter(val => val.status === 'online')
    .map(el => el.username);

  const offline = friends
    .filter(val => val.status === 'offline')
    .map(el => el.username);

  const away = friends
    .filter(val => val.status === 'away')
    .map(el => el.username);

  return friends.reduce((acc, val) => {
    online.length > 0 ? (acc['online'] = online) : null;
    acc['offline'] = offline;
    acc['away'] = away;
    return acc;
  }, {});
};

console.log(whosOnline(friends));
