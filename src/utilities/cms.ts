export async function getCmsData() {
  const request = await fetch('http://localhost:3000/api/cms');
  const data = await request.json();
  return data;
}
