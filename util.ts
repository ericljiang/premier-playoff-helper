export function isDefined<T>(x: T): x is Exclude<T, undefined> {
  return x !== undefined;
}

export function renderPercentage(n: number | undefined): string {
  if (n === undefined || isNaN(n)) {
    return "--%";
  }
  return `${(n * 100).toFixed(0)}%`;
}
