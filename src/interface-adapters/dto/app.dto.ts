import { IsNotEmpty, IsNumber } from 'class-validator';

export class AppDto {
  @IsNumber()
  @IsNotEmpty()
  custo: number;
}
