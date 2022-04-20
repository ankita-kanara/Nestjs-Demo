import { HttpException, Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';

@Injectable()
export class AuthService {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        throw new HttpException('Method not implemented.',404);
    }
}
