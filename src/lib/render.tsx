import { Children } from "react";

const Render = ({ render, of }: { render: any; of: any[] }) =>
  Children.toArray(of.map((item, index) => render(item, index)));

export default Render;
