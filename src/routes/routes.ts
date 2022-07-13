interface RouteInterface {
  id: string;
  title: string;
  link: string;
}

export const Routes: RouteInterface[] = [
  {
    id: "1",
    title: "Link 01",
    link: "/link1",
  },
  {
    id: "2",
    title: "Link 02",
    link: "/link2",
  },
  {
    id: "3",
    title: "Link 03",
    link: "/link3",
  },
];
