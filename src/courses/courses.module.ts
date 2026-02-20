import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Course } from "./courses.entity";
import { CoursesController } from "./courses.controller";
import { CoursesService } from "./courses.service";
import { Review } from "./review.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Course, Review]),
    ],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule { }