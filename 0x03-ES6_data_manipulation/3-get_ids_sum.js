export default function getStudentIdsSum(students) {
  return Array.isArray(students) && students.reduce((ac, cv) => ac + cv.id, 0);
}
