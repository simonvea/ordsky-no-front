const baseUrl = '/api/cloud';

/*  async function getCloud(data) {
  const url = '/api/create-cloud';
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, init);
  const cloud = await response.json();

  return cloud;
} */

export async function getCloud(id) {
  const url = `${baseUrl}/${id}`;
  const response = await fetch(url);
  return response.json();
}

export async function createCloud(data) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(baseUrl, init);

  return response.json();
}
