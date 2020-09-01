export class Phase1 {
  constructor(scene) {
    this.relatedScene = scene;
  }

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['bluebrick'],
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 67,
        cellHeight: 34,
        x: 112,
        y: 100
      }
    });
    return this.bricks;
  }
}