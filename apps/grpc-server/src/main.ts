import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:9999', // default 'localhost:5000'
        package: 'player',
        protoPath: 'proto/player.proto',
      },
    },
  );
  await app.listen(() => console.log('microservice is listening'));
}
bootstrap();
