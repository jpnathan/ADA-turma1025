import { userRepository } from "../models";

export class UserController {
    public findAll() {
        return userRepository.findAll();
    }
}