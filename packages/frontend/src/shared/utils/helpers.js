
export const formatPlayerAge = (dateString) => {
  if (!dateString) return;

  const birthdate = new Date(dateString);
  const cur = new Date();
  const diff = cur - birthdate; // This is the difference in milliseconds
  return Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25
};

export const formatHeight = inches => {
  const feet = Math.floor(inches / 12);

  return `${feet}'${inches %= 12}`;
};
