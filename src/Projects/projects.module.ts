import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Projects, ProjectsSchema } from './schema/projects.schema';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: Projects.name, schema: ProjectsSchema }])
    ],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
