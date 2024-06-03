import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'; // Import dotenv


dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all origins
  app.enableCors();
  
  const port = process.env.PORT || 8000; // You can add a PORT variable in your .env file
  await app.listen(port);
}

bootstrap();
