import QUnit from 'steal-qunit';
import Restaurant from './restaurant';

QUnit.module('models/restaurant');

QUnit.test('getList', function(){
  QUnit.stop();
  Restaurant.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    QUnit.start();
  });
});
