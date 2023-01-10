import { Module } from '@nestjs/common';
import { HttpModule } from './shared/infra/http/http.module';

@Module({
  imports: [HttpModule],
})
export class AppModule {}
