import { Controller, Get, Logger, Param, ParseIntPipe } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Player, PlayerById } from './interfaces/player.interface';

@Controller('player')
export class PlayerController {
  private readonly players: Player[];
  private readonly logger: Logger;

  constructor() {
    this.players = [
      { id: 1, name: 'David' },
      { id: 2, name: 'Mike' },
    ];
    this.logger = new Logger('grpc-with-http');
  }

  @GrpcMethod('PlayersService')
  findOne(data: PlayerById): Player {
    this.logger.log('grpc method');
    return this.players.find(({ id }) => id === data.id);
  }

  @Get('id/:id')
  async findOneById(@Param('id', ParseIntPipe) pid: number) {
    this.logger.log('http method');
    return this.players.find(({ id }) => id === pid);
  }
}
