import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { container } from 'tsyringe';
import UserFinder from '../../user/application/UserFinder';
import TypeOrmUserRepository from '../../user/infrastructure/TypeOrmUserRepository';

const repository = container.resolve(TypeOrmUserRepository);

passport.use('local', new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email:string, password:string, done: CallableFunction) => {
    const userFinder = new UserFinder(repository);
    const user = userFinder.byMail(email);
    
  },
));
