export const convertPhoneToEmail = (phone: string) => {
  // replacing special characters( +,-, (, ), and #. ) to alphabet chars
  console.log(phone);
  const cleanedPhone = phone
    .replace("(", "A")
    .replace(")", "B")
    .replace(",", "C")
    .replace("#", "D")
    .replace(" ", "E");

  const email = `${cleanedPhone}@yourdomain.com`;

  return email;
};
