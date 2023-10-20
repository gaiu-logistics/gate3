function customFetch(url, options = {}) {
  // Set default headers and options here if needed
  const defaultHeaders = {
    "Content-Type": "application/json",
    // Add any other common headers
  };

  options.headers = { ...defaultHeaders, ...options.headers };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        // Check if the response status is within the 200-299 range (success range)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export default customFetch;
