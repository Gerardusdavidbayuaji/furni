import axiosWithConfig from "../axiosWithConfig";

export const getFeaturedProducts = async () => {
  try {
    const response = await axiosWithConfig.get(`/products?featured=true`);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axiosWithConfig.get(`/products`);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
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
