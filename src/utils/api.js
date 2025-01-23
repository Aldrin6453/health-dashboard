export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Failed to fetch data");
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  };
  