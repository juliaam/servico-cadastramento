import { IsInt, IsNotEmpty } from 'class-validator';

export class SubscriptionDto {
  @IsInt()
  @IsNotEmpty()
  readonly codApp: number;

  @IsInt()
  @IsNotEmpty()
  readonly codCli: number;
}
