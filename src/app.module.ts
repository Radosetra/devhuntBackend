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
import { Novice } from './novice/novice.entity';
import { Passion } from './passion/passion.entity';
import { NoviceModule } from './novice/novice.module';
import { PassionModule } from './passion/passion.module';
// import { DataFactoryService } from './data-factory/data-factory.service';
import { ParcoursModule } from './parcours/parcours.module';
import { Parcours } from './parcours/parcours.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'devhunt',
      entities: [Mentor, Profile, Parcours, Specialisation, Novice, Passion],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Profile, Mentor, Specialisation]),
    NoviceModule,
    PassionModule,
    ParcoursModule
  ],
  controllers: [AppController, ProfileController, MentorController, SpecialisationController],
  providers: [AppService, ProfileService, MentorService, SpecialisationService],
})
export class AppModule {}
