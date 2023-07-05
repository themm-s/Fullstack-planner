export interface INavbarLink {
  id: string;
  title: string;
}

export const navLinks: INavbarLink[] = [
  {
    id: "about",
    title: "О сайте"
  },
  {
    id: "mydeals",
    title: "Мои дела"
  },
  {
    id: "contact",
    title: "Контакты"
  }
];