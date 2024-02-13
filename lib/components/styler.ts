import type { CSSProperties } from "react";
import { type UnionToIntersection } from "type-fest";

type StyleType = CSSProperties | undefined;

type SxReturnType<T extends Array<StyleType>> = UnionToIntersection<
  NonNullable<T[number]>
>;

export function sx<T extends Array<StyleType>>(...styles: T): SxReturnType<T> {
  return Object.assign({}, ...styles);
}
