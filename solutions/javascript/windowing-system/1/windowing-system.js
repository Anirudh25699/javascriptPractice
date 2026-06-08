// @ts-check

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();        // defaults: 80 x 60
    this.position = new Position(); // defaults: 0, 0
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const clampedWidth = Math.min(Math.max(newSize.width, 1), maxWidth);
    const clampedHeight = Math.min(Math.max(newSize.height, 1), maxHeight);

    this.size.resize(clampedWidth, clampedHeight);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const clampedX = Math.min(Math.max(newPosition.x, 0), maxX);
    const clampedY = Math.min(Math.max(newPosition.y, 0), maxY);

    this.position.move(clampedX, clampedY);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}