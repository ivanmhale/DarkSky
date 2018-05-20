export default timeStamp => {
  var xx = new Date();
  xx.setTime(timeStamp * 1000); // javascript timestamps are in milliseconds
  const time = `${xx.getMonth()+1}/${xx.getUTCDate()}`
  return time;
};
