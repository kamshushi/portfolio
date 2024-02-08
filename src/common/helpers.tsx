export function cStr(...strings: string[]): string {
  let str = "";
  for (const string of strings) {
    str += str ? " " + string : string;
  }
  return str;
}
