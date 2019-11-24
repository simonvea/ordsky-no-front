const baseUrl = '/api/cloud';

async function createCloud(data) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(baseUrl, init);

  if (!response.ok) throw new Error(response.status);

  return response.json();
}

export default createCloud;
