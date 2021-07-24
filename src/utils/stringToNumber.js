export default function(string) {
  return Array(string.length).fill(0).reduce((sum, _, i) => {
    return sum + string.charCodeAt(i);
  }, 0);
}