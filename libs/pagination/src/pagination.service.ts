import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService {
    consolelog(id:string){
        console.log("pagination service", id)
    }
}
