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
  return friends.reduce((acc, val) => {
    acc['online'] = friends.filter(val => val.status === 'online');
    return acc;
  }, {});
};

console.log(whosOnline(friends));
