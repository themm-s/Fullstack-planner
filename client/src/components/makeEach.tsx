import { createElement, FC, Fragment } from "react";

export type TFC<T, M extends object> = FC<{
  item: T;
  index: number;
  array: T[];
  meta?: M;
}>;

export function makeEach<T, M extends object = {}>(FC: TFC<T, M>) {
  return (
    ({ items, meta }) => {
      return createElement(
        Fragment,
        {},
        ...items.map(
          (item, index, array) => (
            <FC {...{ item, index, array, meta }} />
          )
        )
      );
    }
  ) as FC<{ items: T[]; meta?: M; }>;
}