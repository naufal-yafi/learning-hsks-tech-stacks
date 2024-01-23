import ButtonBackToHome from "@component/ButtonBackToHome";

const NotFound = () => {
  return (
    <main className="container-padding pt-20">
      <ButtonBackToHome />

      <h1 className="text-xl">
        <span className="text-red-600">404</span> Page Not Found.
      </h1>
      <p className="text-xs mt-1">
        You may be lost, please return to the homepage.
      </p>
    </main>
  );
};

export default NotFound;
