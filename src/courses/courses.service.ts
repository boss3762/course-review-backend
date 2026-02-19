import { Injectable } from "@nestjs/common";
import { Course } from "./courses.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>,
    ) { }

    async findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
        /*
        return [
            { id: '100', number: '01204111', title: 'Computer and Programming' },
            { id: '101', number: '01204112', title: 'React' },
            { id: '102', number: '01204113', title: 'Node.js' },
        ];
        */
    }
}