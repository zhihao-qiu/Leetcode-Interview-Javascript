var findMinArrowShots = function(points) {
  let shot = 0;
  points.sort((a, b) => (a[0] - b[0]));
  console.log(points);
  let curr = points[0], prev = points[0];
  const [start, end] = [0, 1];
  const result = [];
  for (let i = 0; i < points.length; i++) {
    curr = points[i];

    if (curr[start] <= prev[end]) {
      prev[start] = curr[start];
      if (curr[end] < prev[end]) prev[end] = curr[end];
    } else {
      shot++;
      prev = curr;
    }

    if (i == points.length - 1) shot++;
  }
  return shot;
};

