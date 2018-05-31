import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {UserProfile} from '../../interfaces/UserProfile';

@Injectable()
export class UserServiceProvider {

  constructor(private storage: Storage) {

  }

  public saveUser(userProfile: UserProfile): Promise<UserProfile> {
    return this.storage.set('user', userProfile);
  }

  public getUser(): Promise<UserProfile> {
    return this.storage.get('user')
      .then(user => {

        if(user){
          return user as UserProfile;
        }

        return null;

      });
  }

}
