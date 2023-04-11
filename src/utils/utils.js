export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export function toTimestamp(date) {
  return new Date(date).getTime();
}
