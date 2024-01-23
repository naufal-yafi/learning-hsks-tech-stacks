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
    try {
      const OBJ = JSON.parse(url);

      if (OBJ && OBJ.hasOwnProperty("0")) {
        return OBJ[0];
      } else {
        throw new Error("Format URL tidak sesuai");
      }
    } catch (error) {
      console.log((error as Error).message);
      return "";
    }
  },
};

export default Utils;
