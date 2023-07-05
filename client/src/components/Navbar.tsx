import { INavbarLink } from "constants/navLinks";
import { styles } from "constants/styles";
import { forwardRef } from "react";

import { makeEach } from "./makeEach";

type TNavbarProps = {
  navLinks?: INavbarLink[];
} & Omit<JSX.IntrinsicElements['div'], 'ref'>;

const EachLinks = makeEach<INavbarLink, { click(link: INavbarLink): any; }>(
  ({ item: link }) => (
    <a className="px-12 py-3 cursor-pointer rounded-full bg-black bg-opacity-10 mx-5 my-3" href={link.id}> {link.title} </a>
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
      <div className={`text-black bg-gradient-to-r from-sky-400 to-emerald-500 ${className} ${styles.centered}`} {...props} ref={ref}>
        <EachLinks items={navLinks} />
      </div>
    )
  )
);