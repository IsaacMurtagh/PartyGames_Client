export default function(camelString) {
  return camelString.replace(/([a-z])([A-Z])/g, '$1 $2');
}