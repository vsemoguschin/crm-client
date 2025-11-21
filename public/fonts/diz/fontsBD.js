import lemon_tuesday from './lemon_tuesday/data.js';
import studio_script from './studio_script/data.js';
import madegoodtime from './madegoodtime/data.js';
import made_likes_script from './made_likes_script/data.js';
import dream_beach from './dream_beach/data.js';
import corinthia from './corinthia/data.js';
import signpainter_housescript from './signpainter_housescript/data.js';
import jakobTT_bold from './jakobTT_bold/data.js';
import ts_remarker from './ts_remarker/data.js';
import code_light from './code_light/data.js';

import comfortaa from './comfortaa/data.js';
import festus from './festus/data.js';
import marske from './marske/data.js';
import neon from './neon/data.js';
import visual_hollow from './visual_hollow/data.js';
import sailing_heart from './sailing_heart/data.js';

//База шрифтов
let fonts = [
  comfortaa.name, //готов, +элементы
  made_likes_script.name, //готов +элементы
  signpainter_housescript.name, //готов, +элементы
  studio_script.name, //готов, +элементы
  corinthia.name, //готов, +элементы
  madegoodtime.name, //готов, +элементы
  jakobTT_bold.name, //готов, +элементы
  dream_beach.name, //готов,  +элементы
  lemon_tuesday.name, //готов, +элементы
  sailing_heart.name, //готов, +элементы
  neon.name, // готов, +элементы
  code_light.name, //готов, +элементы
  ts_remarker.name, //готов, +элементы

  // festus.name,
  // marske.name,
  // visual_hollow.name,
];

//шрифты
const fontsBD = {
  [corinthia.name]: corinthia,
  [comfortaa.name]: comfortaa,
  [lemon_tuesday.name]: lemon_tuesday,
  [studio_script.name]: studio_script,
  [madegoodtime.name]: madegoodtime,
  [made_likes_script.name]: made_likes_script,
  [dream_beach.name]: dream_beach,
  [signpainter_housescript.name]: signpainter_housescript,
  [jakobTT_bold.name]: jakobTT_bold,
  [ts_remarker.name]: ts_remarker,
  [code_light.name]: code_light,
  [neon.name]: neon,
  [sailing_heart.name]: sailing_heart,

  [festus.name]: festus,
  [marske.name]: marske,
  [visual_hollow.name]: visual_hollow,
};

export { fonts, fontsBD };
