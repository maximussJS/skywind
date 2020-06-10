import { service } from "@loopback/core";
import { post, requestBody } from '@loopback/rest';
import { PlayerService } from '../services';
import { Player, Body } from '../interfaces';

const PlayerSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }
    }
};

export class PlayerController {
  constructor(
      @service(PlayerService)
      public playerService: PlayerService
  ) {}

    @post('/player/me', {
        responses: {
            '200': {
                description: 'Player model instance',
                content: {
                    'application/json': {
                        schema: PlayerSchema
                    }
                },
            },
        },
    })
    async getByName(
        @requestBody({
            content: {
                'application/json': PlayerSchema,
            },
        })
            body: Body,
    ): Promise<Player> {
    console.log("request", body.name)
      return this.playerService.getByName(body.name)
        // return this.playerRepository.create(player);
    }
}

