import Eventing from './Eventing';
import Sync from './Sync';
import Attributes from "./Attributes";

export interface UserConfig {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = 'http://localhost:3000/users';

export default class User<UserConfig> {
  public events: Eventing = new Eventing();
  public sync: Sync<UserConfig> = new Sync<UserConfig>(rootUrl);
  public attributes: Attributes<UserConfig>;

  constructor(attrs: UserConfig) { 
    this.attributes = new Attributes<UserConfig>(attrs);
  }

  get on() { 
    return this.events.on;
  }

  get trigger() { 
    return this.events.trigger;
  }

  get get() { 
    return this.attributes.get;
  }
}