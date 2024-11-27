import axiosWithConfig from "../axiosWithConfig";

export const getFeaturedProducts = async () => {
  try {
    const response = await axiosWithConfig.get(`/products?featured=true`);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getAllProducts = async (params?: Record<string, any>) => {
  try {
    const query = Object.entries(params || {})
      .filter(([, value]) => value !== "" && value !== null && value !== 0)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    const url = query ? `/products?${query}` : `/products`;
    const response = await axiosWithConfig.get(url);
    return response.data;
  } catch (error: any) {
    throw Error(error.response?.data?.message || "Error fetching products");
  }
};

export const getDetailProduct = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`/products/${id}`);
    return response.data.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
