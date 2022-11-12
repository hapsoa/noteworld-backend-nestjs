import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  private readonly userRepository: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  public async createUser() {
    const userRepository = this.dataSource.getRepository(User);
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await userRepository.save(user);
  }

  public async getUser() {
    const userRepository = this.dataSource.getRepository(User);
    // const allUsers = await userRepository.find();
    // const firstUser = await userRepository.findOneBy({
    //   id: 1,
    // }); // find by id
    const timber = await userRepository.findOneBy({
      firstName: 'Timber',
      lastName: 'Saw',
    }); // find by firstName and lastName
    return timber;
  }

  public async deleteUser() {
    const timber = await this.userRepository.findOneBy({
      firstName: 'Timber',
      lastName: 'Saw',
    });
    await this.userRepository.remove(timber);
  }
}
