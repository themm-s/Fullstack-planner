import { createElement, Fragment } from "react";

type TChildren = JSX.IntrinsicElements['div']['children'];

export type TForEachProps<T> = {
  items: T[];
  children: TChildren | ((item: T, index: number, array: T[]) => TChildren);
};


export function ForEach<T>({ items, children }: TForEachProps<T>) {
  return createElement(
    Fragment,
    {},
    ...items.map(
      (item, index, array) => (
        children instanceof Function ? children(item, index, array) : children
      )
    )
  );
}