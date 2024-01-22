const config: {
  api_url: {
    products: string;
  };
  offset: (page: number) => number;
  limit: number;
} = {
  api_url: {
    products: `${process.env.NEXT_PUBLIC_API}/products`,
  },
  offset: (page: number = 0): number => {
    return page === 1 ? 0 : (page - 1) * 12;
  },
  limit: 12,
};

export default config;
