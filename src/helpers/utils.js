
export const compose = (...a) => x => a.reduceRight((y, fn) => fn(y), x);
export const curry = (fn, args = []) => (...a) => { let x = args.concat(a); return x.length >= fn.length ? fn(...x) : curry(fn, x); };

export const normalize = a => a / 3000;
export const multiplyMouse = ([ x, y ], inc) => ({ x: x * inc, y: y * inc });

export const getFreq = fd => ({
  low: normalize(fd[0] + fd[1] + fd[2] + fd[3] + fd[4]),
  mid: normalize(fd[5] + fd[6] + fd[7] + fd[8] + fd[9]),
  high: normalize(fd[10] + fd[11] + fd[12] + fd[13] + fd[14])
});

export const push = (arr, vert, w) => arr.push([ vert[0], vert[1], vert[2], w ]);
export const addMultiple = (scene, obj) => Object.values(obj).forEach(object => scene.add(new object()));
export const clamp = (v, l, h) => l < h ? (v < l ? l : v > h ? h : v) : (v < h ? h : v > l ? l : v);

export const loadJson = (name, cb) => new THREE.JSONLoader().load(`/assets/models/${name}.js`, x => cb(x));
export const createBufferGeom = (obj, geometry = new THREE.BufferGeometry()) =>
  (Object.entries(obj).forEach(([key, val]) =>
    geometry.addAttribute(key, new THREE.BufferAttribute(...val))
  ), geometry);

export const vecToArr = ({ vertices, faces }) => {
  const vert = [];
  const face = [];
  vertices.forEach(({ x, y, z }) => vert.push([ x, y, z ]));
  faces.forEach(({ a, b, c }) => face.push([ a, b, c ]));
  return {
    positions: vert,
    cells: face
  };
};
