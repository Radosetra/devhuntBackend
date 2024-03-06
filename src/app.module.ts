import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { MentorService } from './mentor/mentor.service';
import { MentorController } from './mentor/mentor.controller';
import { SpecialisationService } from './specialisation/specialisation.service';
import { SpecialisationController } from './specialisation/specialisation.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileController, MentorController, SpecialisationController],
  providers: [AppService, ProfileService, MentorService, SpecialisationService],
})
export class AppModule {}
