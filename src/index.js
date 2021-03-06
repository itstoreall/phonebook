import { login, logout, getContacts, addContact, deleteContact } from './api';
import './styles.css';



const refs = {
  loader: document.querySelector('.loader'),
  login: document.querySelector('.login'),
  logout: document.querySelector('.logout'),
  content: document.querySelector('.content'),
  form: document.querySelector('.form'),
  userInfo: document.querySelector('.user-info'),
  name: document.querySelector('.name'),
  email: document.querySelector('.email'),
  list: document.querySelector('.list'),
};

let contacts = [];

const showLoader = () => refs.loader.classList.add('show');
const hideLoader = () => refs.loader.classList.remove('show');

const render = () => {
  const items = contacts
    .map(
      ({ id, name, number }) =>
        `<li>${name}: ${number} <button class="delete" data-id=${id}>x</button></li>`,
    )
    .join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', items);
};

const handleLogin = () => {
  const userData = {
    email: 'test.user@mail.com',
    password: '1234567',

    // email: 'sergnovosad@mail.com',
    // password: '7654321',
  };

  showLoader();

  login(userData)
    .then(({ user }) => {
      refs.name.textContent = user.name;
      refs.email.textContent = user.email;

      refs.login.classList.remove('show');
      refs.logout.classList.add('show');
      refs.content.classList.add('show');
    })
    .then(getContacts)
    .then(data => (contacts = data))
    .then(render)
    .finally(hideLoader);
};

const handleLogout = () => {
  showLoader();

  logout()
    .then(() => {
      refs.name.textContent = '';
      refs.email.textContent = '';

      refs.content.classList.remove('show');
      refs.logout.classList.remove('show');
      refs.login.classList.add('show');
    })
    .finally(hideLoader);
};

const handleSubmit = e => {
  const { name, number } = e.target.elements;
  const newContact = { name: name.value, number: number.value };

  e.preventDefault();
  showLoader();

  addContact(newContact)
    .then(contact => {
      contacts.push(contact);
    })
    .then(render)
    .then(() => {
      name.value = '';
      number.value = '';
    })
    .finally(hideLoader);
};

const handleDelete = e => {
  const {id} = e.target.dataset;

  if (id) {
    showLoader();
    deleteContact(id).then(() => {
      contacts = contacts.filter(item => item.id !== id);
    }).then(render).finally(hideLoader);
  };
}

refs.login.addEventListener('click', handleLogin);
refs.logout.addEventListener('click', handleLogout);
refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleDelete);