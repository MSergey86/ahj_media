export default class PostRenderer {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  static markUp(date, content, coords) {
    return `<div class="timeline__item">
      <div class="timeline-item__data">${date}</div>
      <div class="timeline-item__content">
        ${content}
      </div>
      <div class="timeline-item__geo">
        <span class="geo__data">[${coords.latitude}, ${coords.longitude}]</span>
        <span class="geo__icon">
          
        </span>
      </div>
    </div>`;
  }

  draw(data) {
    this.container.innerHTML = '';
    data.forEach((elem) => {
      this.container.insertAdjacentHTML('beforeend', PostRenderer.markUp(elem.date, elem.content, elem.coords));
    });
  }
}
