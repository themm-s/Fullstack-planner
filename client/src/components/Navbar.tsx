import { INavbarLink } from "constants/navLinks";
import { styles } from "constants/styles";
import { forwardRef } from "react";

import { makeEach } from "./makeEach";

type TNavbarProps = {
  navLinks?: INavbarLink[];
} & Omit<JSX.IntrinsicElements['div'], 'ref'>;

const EachLinks = makeEach<INavbarLink, { click(link: INavbarLink): any; }>(
  ({ item: link }) => (
    <a className="px-12 py-3 cursor-pointer rounded-full bg-indigo-900 bg-opacity-80 mx-5 my-3" href={link.id}> {link.title} </a>
  )
);

export const Navbar = (
  forwardRef<HTMLDivElement, TNavbarProps>(
    (
      {
        navLinks = [],
        className,
        ...props
      },
      ref
    ) => (
      <div className={` bg-gray-500 text-white bg-opacity-50 p-2 rounded-br-full rounded-bl-full ${className} ${styles.centered}`} {...props} ref={ref}>
        <EachLinks items={navLinks} />
      </div>
    )
  )
);