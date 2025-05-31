const STORAGE_KEY = 'contacts';

export default class Contacts {
  static save(contacts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }

  static load() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
}
