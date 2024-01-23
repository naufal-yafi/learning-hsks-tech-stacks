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
};

export default Utils;
