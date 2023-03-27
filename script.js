//your code here
function findMajority() {
  const input = document.getElementById('input').value;
  const arr = input.split(',').map(num => parseInt(num.trim(), 10));
  const majority = majorityElement(arr);
  const result = document.getElementById('result');
  
  if (majority === null) {
    result.innerHTML = 'No majority element found.';
  } else {
    result.innerHTML = `The majority element is ${majority}.`;
  }
}

function majorityElement(arr) {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
    }

    if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Check if candidate is actually the majority element
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }
  if (count > Math.floor(arr.length / 2)) {
    return candidate;
  } else {
    return null;
  }
}
