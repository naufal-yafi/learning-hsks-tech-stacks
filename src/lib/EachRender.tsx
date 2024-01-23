import { Children } from "react";

const EachRender = ({ render, of }: { render: any; of: any[] }) =>
  Children.toArray(of?.map((item) => render(item)));

export default EachRender;
