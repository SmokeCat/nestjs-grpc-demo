import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PlayerController } from './player.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PLAYER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:9999',
          package: 'player',
          protoPath: 'proto/player.proto',
        },
      },
    ]),
  ],
  controllers: [PlayerController],
})
export class PlayerModule {}
