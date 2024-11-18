import axios, { AxiosResponse } from 'axios';

axios.defaults.headers.common = {
  Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string}`
};

interface UnsplashPhoto {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export async function search_photos(query: string): Promise<UnsplashSearchResponse> {
  try {
    const result: AxiosResponse<UnsplashSearchResponse> = await axios.get(
      `${import.meta.env.VITE_UNSPLASH_API_BASE_URL as string}/search/photos`,
      { params: { query } }
    );

    return result.data;
  } catch (error) {
    throw new Error('Si è verificato un errore. Si prega di riprovare più tardi.');
  }
}
