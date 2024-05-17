async function fetchWithBaseUrl(url, options) {
    const API_BASE_URL = 'http://localhost:3000';
    const response = await fetch(`${API_BASE_URL}${url}`, options);
    return response.json();
}

export { fetchWithBaseUrl };
