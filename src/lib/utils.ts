import CartType from "@type/cart.type";

const Utils = {
  formatDate: (create: string, update: string): string => {
    const getDate = create !== update ? update : create;
    const date = new Date(getDate);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  },
  fixUrlImg: (url: string): string => {
    return url.replace(/\\|\["|"]/g, "");
  },
  countPrice: (carts: CartType[]): number => {
    let result = 0;

    carts.forEach((cart: CartType) => (result += cart.price));

    return result;
  },
  isMatchTitle: (carts: CartType[], targetTitle: string): boolean => {
    const find = carts.filter((cart: CartType) => cart.title === targetTitle);

    return find.length > 0;
  },
};

export default Utils;
