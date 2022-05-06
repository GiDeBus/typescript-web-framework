import { Model } from "./Model"; 
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";

export interface UserConfig {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = 'http://localhost:3000/users';
export default class User extends Model<UserConfig> {
  static buildUser(attrs: UserConfig): User { 
    return new User(
      new Attributes<UserConfig>(attrs),
      new Eventing(),
      new ApiSync(rootUrl)<UserConfig>
    );
  }
}