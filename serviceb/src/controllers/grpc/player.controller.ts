import { get } from '@loopback/rest';
import { grpc } from '@loopback/grpc';
import { repository } from '@loopback/repository';
import { PlayerRepository } from '../../repositories';
import { Player, player, Body } from '../../interfaces';


export class PlayerController implements player.PlayerService {
    constructor(
      @repository(PlayerRepository)
      public playerRepository : PlayerRepository,
    ) {}

  @get('/player/me', {
    responses: {
        200: {

        }
    },
  })
  async f(): Promise<void> {
        console.log("max +++ request get OK")
    // return this.playerRepository.create(player);
  }

    @grpc(player.getByName)
    getByName(request: Body): Promise<Player> {
        const { name } = request;
        const p: Player = {
            name
        };
        console.log("++++++",name)
        return Promise.resolve( {
            name: "max"
        });
        // return this.playerRepository.findById(name);
    }
}
