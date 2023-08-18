var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0], prev = intervals[0];
  const [start, end] = [0, 1];
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    curr = intervals[i];

    if (curr[start] <= prev[end] && curr[end] > prev[end]) {
      prev[end] = curr[end];
    } else if (curr[start] > prev[end]) {
      result.push(prev);
      prev = curr;
    }

    if (i == intervals.length - 1) result.push(prev);
  }
  return result;
};
