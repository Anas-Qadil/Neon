import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 5001;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
