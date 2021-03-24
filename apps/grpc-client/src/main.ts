import { NestFactory } from '@nestjs/core';
import { GrpcClientModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcClientModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
