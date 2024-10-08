export default function getListStudenIds(arr) {
  return Array.isArray(arr) ? arr.map((obj) => obj.id) : [];
}
