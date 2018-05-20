export default timeStamp => {
  var xx = new Date();
  xx.setTime(timeStamp * 1000); // javascript timestamps are in milliseconds
  const time = xx.toLocaleTimeString();
  const hourMinute = time.slice(0,5);
  const period = time.slice(8);
  return hourMinute+" "+period;
};
