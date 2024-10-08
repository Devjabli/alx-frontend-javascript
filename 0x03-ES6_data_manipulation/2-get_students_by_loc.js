export default function getStudentsByLocation(students, loc) {
  return Array.isArray(students) ? students.filter((obj) => obj.location === loc) : [];
}
