export default class Test {
  static header() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    header.innerText = 'Hello Webpack!';
    body.appendChild(header);
  }
}
