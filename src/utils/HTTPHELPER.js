export default {
  GetRequest: async ({ route = "" }) => {
    try {
      const res = await fetch(`${route}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(parameters),
        // body: parameters,
      });
      if (!res.ok) {
        if (res.status === 404) {
          // Handle Not Found error
          return {
            status: 404,
            message: "Zones not found !",
            data: [],
          };
        } else if (res.status === 401) {
          // Handle Not Found error
          return {
            status: 401,
            message: "Unauthorized !",
            data: [],
          };
        } else {
          // Handle other errors
          return {
            status: 520,
            message: "Unknown Error !",
            data: [],
          };
        }
      } else {
        const data = await res.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      return {
        status: 520,
        message: "Unknown Error !",
        data: [],
      };
    }
  },
};
