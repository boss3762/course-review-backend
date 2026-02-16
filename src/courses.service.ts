import { Injectable } from "@nestjs/common";
import { Course } from "./interfaces/courses.interface";

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
        return [
            {id: '100',number: '01204111', title: 'Computer and Programming'},
            {id: '101',number: '01204112', title: 'React'},
            {id: '102',number: '01204113', title: 'Node.js'},
        ];
    }
}