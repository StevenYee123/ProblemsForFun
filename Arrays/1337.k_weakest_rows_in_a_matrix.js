const kWeakestRows = (mat, k) => {
  const m = mat.length;
  const n = mat[0].length;
  const ret = [];
  for (let i = 0; i < m; ++i) {
    let cur = 0;
    for (let j = 0; j < n; ++j, ++cur) {
      if (mat[i][j] === 0) break;
    }
    ret.push([cur, i]);
  }
  return ret
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .slice(0, k)
    .map((item) => item[1]);
};
