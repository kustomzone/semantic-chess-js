/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const assert = require('assert');
const Generator = require('./generator');

describe('Generator', function() {
  it('default start position, one move white', async function () {
    const generator = new Generator();

    const game = await generator.generateFromUrl('https://ph_test.solid.community/public/chess_unittest.ttl#game', 'https://ph_test.solid.community/profile/card#me', 'https://ph_test.solid.community/public/chess_unittest.ttl');

    assert.equal(game.getUrl(), 'https://ph_test.solid.community/public/chess_unittest.ttl#game', 'The url of the game is not correct.');
    assert.equal(game.getUserDataUrl(), 'https://ph_test.solid.community/public/chess_unittest.ttl', 'The data url of the user is not correct.');
    assert.equal(game.getOpponentWebId(), 'https://ph2.solid.community/profile/card#me', 'The WebId of the opponent is not correct.');
    assert.deepEqual(game.getLastMove(), {san: 'e3', url: 'https://ph_test.solid.community/public/chess_unittest.ttl#jo8df0y0'}, 'The last move is not correct.');
    assert.deepEqual(game.getLastUserMove(), {san: 'e3', url: 'https://ph_test.solid.community/public/chess_unittest.ttl#jo8df0y0'}, 'The last move is not correct.');
    assert.equal(game.getStartPosition(), 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'The start position is not correct.');
    assert.equal(game.getUserColor(), 'w', 'The color of the user is not correct.');
  });

  it('custom start position, one move black', async function () {
    const generator = new Generator();

    const game = await generator.generateFromUrl('https://ph_test.solid.community/public/chess_unittest-2.ttl#game', 'https://ph_test.solid.community/profile/card#me', 'https://ph_test.solid.community/public/chess_unittest-2.ttl');

    assert.equal(game.getUrl(), 'https://ph_test.solid.community/public/chess_unittest-2.ttl#game', 'The url of the game is not correct.');
    assert.equal(game.getUserDataUrl(), 'https://ph_test.solid.community/public/chess_unittest-2.ttl', 'The data url of the user is not correct.');
    assert.equal(game.getOpponentWebId(), 'https://ph2.solid.community/profile/card#me', 'The WebId of the opponent is not correct.');
    assert.deepEqual(game.getLastMove(), {san: 'Qxe4', url: 'https://ph2.solid.community/public/chess_unittest-2.ttl#jo8duv1d'}, 'The last move is not correct.');
    assert.equal(game.getLastUserMove(), null, 'The last move is not correct.');
    assert.equal(game.getStartPosition(), 'rnb2bnr/pppppppp/8/3q1k2/4P3/8/PPPPP1PP/RNBQKBNR b KQ - 0 1', 'The start position is not correct.');
    assert.equal(game.getUserColor(), 'w', 'The color of the user is not correct.');
  });
});