import { Injectable, Testability } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
   createDb(){
        const logins = [

          { userName: 'test@test.com', passWord: '1234' },
          { userName: 'test@test.com', passWord: '1234' },
          { userName: 'test@test.com', passWord: '1234' }


        ];
        
        return {logins};
   }

  
}
