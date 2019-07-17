import { createCloud, getCloud } from './asyncfunc.js';
import { addLoading, removeLoading } from './domfunc.js';

const form = document.querySelector('form');
const submitButton = document.getElementById('klikk-meg');
const formType = window.location.search.match(/\w+/g).join(1);

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  addLoading(submitButton);
  const text = e.target.text.value;
  const payLoad = {
    words: text,
    type: formType,
  };

  const response = await createCloud(payLoad);
  window.location.href = `/cloud.html?cloud=${response.id}`;
  removeLoading(submitButton);
  form.reset();
});
