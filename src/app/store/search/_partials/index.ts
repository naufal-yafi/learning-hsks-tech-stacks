import dynamic from "next/dynamic";

const RequireInput = dynamic(() => import("./search/require-input"), {
  ssr: true,
});

const NotValidInput = dynamic(() => import("./search/not-valid-input"), {
  ssr: true,
});

const ResponseValidInput = dynamic(
  () => import("./search/response-valid-input"),
  { ssr: true },
);

const PreviewProducts = dynamic(() => import("./search/preview-products"), {
  ssr: true,
});

export { NotValidInput, PreviewProducts, RequireInput, ResponseValidInput };
