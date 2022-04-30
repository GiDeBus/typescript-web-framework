import { User } from "./models/User";

const user = new User({name: 'someName', age: 20});

user.events.on('logging', () => { 
  console.log('logging stuff');
})

user.events.trigger('logging');