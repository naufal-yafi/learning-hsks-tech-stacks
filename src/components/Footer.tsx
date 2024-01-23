import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container-padding py-10 mt-10 border-t border-black">
      <ul className="tab">
        <li className="tab__container">
          <h1 className="tab__title">Information</h1>

          <ul className="tab__list">
            <li className="tab__item">
              <Link href="/store/search">Search</Link>
            </li>
            <li className="tab__item">
              <Link href="/store/cart">Cart</Link>
            </li>
            <li className="tab__item">
              <Link
                href="https://github.com/naufal-yafi/clone-zara-store"
                target="_blank"
              >
                Github Repository
              </Link>
            </li>
            <li className="tab__item">
              <Link
                href="https://github.com/naufal-yafi/clone-zara-store/commits/main/"
                target="_blank"
              >
                History Commit
              </Link>
            </li>
          </ul>
        </li>

        <li className="tab__container">
          <h1 className="tab__title">Technology</h1>

          <ul className="tab__list">
            <li className="tab__item">
              <Link href="https://www.typescriptlang.org/" target="blank">
                Typescript
              </Link>
            </li>
            <li className="tab__item">
              <Link href="https://react.dev/" target="blank">
                React 18
              </Link>
            </li>
            <li className="tab__item">
              <Link href="https://nextjs.org/" target="blank">
                NextJS 14
              </Link>
            </li>
            <li className="tab__item">
              <Link href="https://tailwindcss.com/" target="blank">
                TailwindCSS
              </Link>
            </li>
            <li className="tab__item">
              <Link
                href="https://react-icons.github.io/react-icons/"
                target="blank"
              >
                React Icons
              </Link>
            </li>
            <li className="tab__item">
              <Link href="https://swr.vercel.app/" target="blank">
                SWR
              </Link>
            </li>
            <li className="tab__item">
              <Link
                href="https://docs.pmnd.rs/zustand/getting-started/introduction"
                target="blank"
              >
                Zustand
              </Link>
            </li>
            <li className="tab__item">
              <Link
                href="https://www.embla-carousel.com/get-started/react/"
                target="blank"
              >
                Embla Carousel React
              </Link>
            </li>
            <li className="tab__item">
              <Link href="https://www.cypress.io/" target="blank">
                Cypress
              </Link>
            </li>
          </ul>
        </li>

        <li className="tab__container">
          <h1 className="tab__title">Developers</h1>

          <ul className="tab__list">
            <li className="tab__item">
              <Link href="https://github.com/naufal-yafi" target="blank">
                Github
              </Link>
            </li>
            <li className="tab__item">
              <Link
                href="https://www.linkedin.com/in/naufal-yafi/"
                target="blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
