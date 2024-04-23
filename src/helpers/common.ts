import CartType from "@type/cart.type";

function isMatchTitle(carts: CartType[], targetTitle: string): boolean {
  const find = carts.filter((cart: CartType) => cart.title === targetTitle);

  return find.length > 0;
}

function fixUrlImg(url: string): string {
  return url.replace(/\\|\["|"]/g, "");
}

function countPrice(carts: CartType[]): number {
  let result: number = 0;

  carts.forEach((cart: CartType) => (result += cart.price));

  return result;
}

export { fixUrlImg, isMatchTitle, countPrice };
