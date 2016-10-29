import { scene } from 'objects/common/scene';




const updatePoints = (waves, item, amt, amp, tick) => {
  const newPositions = []
  const radius = 50
  const waves_amount = waves * 150
  const wave_height = 0.5 * radius

  for (let i = 0; i <= 500; i++) {

    const angle = amt * i
    const radius_addon = wave_height * amp * Math.sin(( angle + tick / 3060) * waves_amount)

    const x = (radius+radius_addon) * Math.cos(angle)
    const y = (radius+radius_addon) * Math.sin(angle)

    newPositions.push(new THREE.Vector3(x, y, 0))
    item.rotation.z = tick / 1000

  }
  item.material.linewidth = 1
  item.geometry.vertices = newPositions
  item.geometry.verticesNeedUpdate = true

}

const line1 = new THREE.Line( new THREE.Geometry(), new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 2500,
  transparent: true,
  opacity: 0.05
}));

const line2 = new THREE.Line( new THREE.Geometry(), new THREE.LineBasicMaterial({
  color: 0x000000
}));

const line3 = new THREE.Line( new THREE.Geometry(), new THREE.LineBasicMaterial({
  color: 0x000000
}));


// scene.add(line1)
// scene.add(line2)
// scene.add(line3)


export default ({
  lowPulse,
  highPulse,
  pulseValue,
  mouseY,
  high,
  tick
}) => {

  updatePoints(0.313, line3, -100, high, tick);

};
