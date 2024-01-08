const addZero = (num: number) => {
  return num >= 10 ? num : '0' + num;
};

const prepareDate = (postDate: string) => {
  const date = new Date(postDate);
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const min = addZero(date.getMinutes());
  const hours = addZero(date.getHours());

  return `${hours}:${min} - ${day}.${month}.${date.getFullYear()}`;
};

export default prepareDate;
