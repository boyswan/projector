import Interpol from 'interpol-js';
import { TweenMax } from 'gsap';

export let mouseX;
export let mouseY;
export let lowPulse = 0;
export let highPulse = 0;
export let maxPulse = { x: 100 };
export let shardPulse = 0;

Interpol.tween()
  .from(1000)
  .to(2000)
  .duration(3333)
  .ease(Interpol.easing.easeInOutCubic)
  .step(val => lowPulse = val * 10)
  .complete(function() { this.reverse(); })
  .start();

Interpol.tween()
  .from(100)
	.to(200)
	.duration(4000)
	.ease(Interpol.easing.easeInOutCubic)
  .step(val => shardPulse = val * 10)
	.complete(function() { this.reverse() })
	.start();

TweenMax.to(maxPulse, 5, { x: 200, repeat: -1, yoyo: true, ease: TweenMax.Elastic.easeInOut });

window.addEventListener('mousemove', e => (mouseX = e.clientX, mouseY = e.clientY))
