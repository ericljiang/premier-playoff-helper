export function isDefined<T>(x: T): x is Exclude<T, undefined> {
  return x !== undefined;
}

export function renderPercentage(n: number | undefined): string {
  if (n === undefined || isNaN(n)) {
    return "--%";
  }
  return `${(n * 100).toFixed(0)}%`;
}

/**
 * @example
 * type RequiredValues = "foo" | "bar" | "baz";
 * const _STRICT = ["foo", "bar", "baz", "extra"] as const satisfies readonly RequiredValues[];
 * const STRICT: ExhaustiveTuple<RequiredValues, typeof _STRICT> = _STRICT;
 * // Type '"extra"' is not assignable to type 'RequiredValues'.ts(2322)
 * @see https://stackoverflow.com/a/78664219/6497736
 */
export type ExhaustiveTuple<
  TUnion,
  TTuple extends readonly any[],
  TOriginal extends readonly any[] = TTuple
> =
  TTuple extends readonly [infer F, ...infer R]
  ? Exclude<TUnion, F> extends never
  ? TOriginal
  : ExhaustiveTuple<Exclude<TUnion, F>, R, TOriginal>
  : never;
