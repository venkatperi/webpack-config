import assets from './assets';
import browserSync from './browserSync';
import define from './define';
import flowStatus from './flowStatus';
import occurenceOrder from './occurenceOrder';
import provide from './provide';
import stats from './stats';
import uglify from './uglify';

export default function (options) {
  return {
    assets: assets(options),
    browserSync: browserSync(options),
    define: define(options),
    flowStatus: flowStatus(options),
    occurenceOrder: occurenceOrder(options),
    provide: provide(options),
    stats: stats(options),
    uglify: uglify(options),
  };
}
