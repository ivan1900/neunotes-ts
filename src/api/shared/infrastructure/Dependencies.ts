import { container } from 'tsyringe';
import TypeOrmUserRepository from '../../user/infrastructure/TypeOrmUserRepository';

export default function createDependencies() {
  container.register('UserRespository', {
    useClass: TypeOrmUserRepository,
  });
}
