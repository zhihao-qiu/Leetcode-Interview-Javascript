var jump = function(nums) {
  const n = nums.length;
  let moves = 0;
  let currentJumpEnd = 0; // The farthest index reachable in the current jump
  let farthest = 0; // The farthest index reachable after taking one more jump

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentJumpEnd) {
      // If we reach the end of the current jump, take the next jump
      moves++;
      currentJumpEnd = farthest;

      if (currentJumpEnd >= n - 1) {
        // If the last element is already reachable, break early
        break;
      }
    }
  }

  return moves;
};
