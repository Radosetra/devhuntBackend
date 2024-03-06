import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { MentorService } from './mentor/mentor.service';
import { MentorController } from './mentor/mentor.controller';
import { SpecialisationService } from './specialisation/specialisation.service';
import { SpecialisationController } from './specialisation/specialisation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentor } from './mentor/mentor.entity';
import { Profile } from './profile/profile.entity';
import { Specialisation } from './specialisation/specialisation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '248651379rfg',
      database: 'devhunt',
      entities: [Mentor, Profile, Specialisation],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Profile, Mentor, Specialisation]),
  ],
  controllers: [AppController, ProfileController, MentorController, SpecialisationController],
  providers: [AppService, ProfileService, MentorService, SpecialisationService],
})
export class AppModule {}
