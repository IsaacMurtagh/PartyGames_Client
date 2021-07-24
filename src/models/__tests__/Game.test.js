import Game from '../Game';
import Player from '../Player';

describe('Game', () => {

  describe('fromApiResponse', () => {

    it('Should transform participants into map', () => {
      const now = new Date();
      const data = {
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        participants: [
          { alias: '0002', displayName: 'joe' },
          { alias: '0001', displayName: 'sammy' },
        ],
      }
      expect(Game.fromApiResponse(data)).toEqual(new Game({
        createdAt: now,
        updatedAt: now,
        participants: {
          '0001': new Player({ alias: '0001', displayName: 'sammy' }),
          '0002': new Player({ alias: '0002', displayName: 'joe' }),
        }
      }));
    });

  })

})