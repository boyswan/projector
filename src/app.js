import * as Interpol from 'helpers/intervals';
import { mouseX, mouseY, maxPulse } from 'helpers/intervals';
import { analyser, frequencyData } from 'helpers/audio'
import { getFreq } from 'helpers/utils';

import Composer from 'objects/common/composer'
import Scene from 'objects/common/scene'
import * as Objects from 'objects';

Scene.add(
  Objects.shards
);

let tick = 0;
const loop = () => {
  requestAnimationFrame(loop)
  analyser.getByteFrequencyData(frequencyData)

  const config = {
    tick: tick++,
    lowPulse: Interpol.shardPulse,
    highPulse: Interpol.highPulse,
    shardPulse: Interpol.shardPulse,
    audio: getFreq(frequencyData),
    mouseX,
    mouseY
  }

  // Composer.update(config)
  Scene.update(config)
};


loop();
