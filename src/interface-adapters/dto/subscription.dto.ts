import { IsInt, IsNotEmpty } from 'class-validator';

export class SubscriptionDto {
  @IsInt()
  @IsNotEmpty()
  codApp: number;

  @IsInt()
  @IsNotEmpty()
  codCli: number;
}
