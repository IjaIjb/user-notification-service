import { Test, TestingModule } from '@nestjs/testing';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';

describe('UserServiceController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let userServiceController: UserServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserServiceController],
      providers: [UserServiceService],
    }).compile();

    userServiceController = app.get<UserServiceController>(
      UserServiceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {});
  });
});