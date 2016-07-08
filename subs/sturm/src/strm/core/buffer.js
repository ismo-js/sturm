// @flow

const O = Object

class Buffer {
  static PART_MASKS = [
    0xFF << 0x18,
    0xFF << 0x10,
    0x3F << 0x0A,
    0x3F << 0x04,
    0x0F << 0x00,
  ];

  constructor(iter: Iterable) {
    O.assign(this, {iter})
  }

  convert() {
    for (let item of this.iter) this.add(item)
    return this
  }

  add(val) {
    const keys = Buffer.PART_MASKS.map(e=> e & this.length)
    const submap = keys.slice(0, -1).reduce((l, r)=> l.get(r), this.map)
    submap.set(keys[keys.length-1], val)

    this.length++
    return this
  }
}
