import {
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './interfaces/playerService.interface';

@Controller('player')
export class PlayerController {
  private readonly players: Player[];
  private readonly playerService: PlayersService;
  private readonly logger: Logger;

  constructor(@Inject('PLAYER_PACKAGE') client: ClientGrpc) {
    this.players = [
      { id: 1, name: 'Sophie' },
      { id: 2, name: 'Mario' },
    ];
    this.playerService = client.getService<PlayersService>('PlayersService');
    this.logger = new Logger('grpc-client');
  }

  @Get('id/:id')
  async getPlayerById(@Param('id', ParseIntPipe) pid: number) {
    this.logger.log('grpc client call');
    // return this.players.find(({ id }) => id === pid);
    const result = await this.playerService.findOne({ id: pid });
    return result;
  }
}
