import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Player, PlayerById } from './interfaces/player.interface';

@Controller('player')
export class PlayerController {
  private readonly players: Player[];
  private readonly logger: Logger;

  constructor() {
    this.players = [
      { id: 1, name: 'Sophie' },
      { id: 2, name: 'Mario' },
    ];
    this.logger = new Logger('grpc-server');
  }

  @GrpcMethod('PlayersService')
  findOne(data: PlayerById): Player {
    this.logger.log('grpc method');
    return this.players.find(({ id }) => id === data.id);
  }
}
