var reverseWords = function (str) {
  const r = [];
  str
    .trim()
    .split(" ")
    .forEach((e) => {
      if (e) {
        r.push(e);
      }
    });
  return r.reverse().join(" ");
};
