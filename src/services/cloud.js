const baseUrl = '/api/cloud';

async function createCloud(data) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  // eslint-disable-next-line no-undef
  const response = await fetch(baseUrl, init);

  return response.json();
}

export default createCloud;
