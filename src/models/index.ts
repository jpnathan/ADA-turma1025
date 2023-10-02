import { UserRepository } from "./UserRepository";

const userRepository = new UserRepository();

userRepository.create('Evandro', 'Professor', 'professor-evandro@gmail.com');

export {
    userRepository,
};