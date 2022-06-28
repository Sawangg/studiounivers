import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { encodePassword } from "src/utils/password";
import type { DeleteResult, Repository } from "typeorm";
import type { CreateUserDto } from "../dtos/CreateUser.dto";
import { User } from "../entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) { }

    createCustomer(createUserDto: CreateUserDto) {
        const password = encodePassword(createUserDto.password);
        const newCustomer = this.usersRepository.create({ ...createUserDto, password });
        return this.usersRepository.save(newCustomer);
    }

    saveOrUpdateRefreshToken(refreshToken: string, id: string, refreshTokenExpires: Date) {
        return this.usersRepository.update(id, { refreshToken, refreshTokenExpires });
    }

    findByUsername(username: string) {
        return this.usersRepository.findOne({ where: { username } });
    }

    findOne(id: number) {
        return this.usersRepository.findOne({ where: { id } });
    }

    async remove(id: string): Promise<DeleteResult> {
        const deleted = await this.usersRepository.delete(id);
        return deleted;
    }
}
