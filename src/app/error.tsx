"use client";

import ButtonBackToHome from "@button/button-back-to-home";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container-padding pt-20">
      <ButtonBackToHome />

      <h1 className="text-xl">
        <span className="text-red-600">500</span> Maybe something is wrong.
      </h1>
      <p className="text-xs mt-1">
        Let&apos;s go back to the home page, maybe you are lost too or changed
        the URL incorrectly.
      </p>
    </main>
  );
}
