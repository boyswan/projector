// var NEWTHREE = require('three')
import Scene from 'objects/common/scene';
import Mesh from 'objects/common/mesh';
import HorizontalBlur from 'materials/shaderPass/horizontalBlur';
import VerticalBlur from 'materials/shaderPass/verticalBlur';
import RBGShift from 'materials/shaderPass/rgbBlur';
import KaleidoShader from 'materials/shaderPass/kalido';

class Composer {

  constructor(){
    this.renderPass = new THREE.RenderPass(Scene.scene, Scene.camera);

    this.kaleidoPass = KaleidoShader;
    this.hBlurPass = HorizontalBlur;
    this.vBlurPass = VerticalBlur;
    this.rgbPass = RBGShift;

    this.composer = new THREE.EffectComposer(Scene.renderer);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.hBlurPass);
    this.composer.addPass(this.vBlurPass);
    this.composer.addPass(this.rgbPass);
    this.composer.addPass(this.kaleidoPass);

    this.kaleidoPass.renderToScreen = true;


  }

  update({ lowPulse, audio: { high } }) {
    this.kaleidoPass.uniforms.sides.value = 12;
    this.hBlurPass.uniforms.h.value = lowPulse * 0.0000005;
    this.vBlurPass.uniforms.v.value = lowPulse * 0.0000005;
    this.rgbPass.uniforms.amount.value = lowPulse * 0.00001;
    this.rgbPass.uniforms.angle.value = lowPulse * 0.01;

    this.composer.render(0.1);
  }

}

export default new Composer();
