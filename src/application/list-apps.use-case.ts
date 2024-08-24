import { Injectable } from '@nestjs/common';
import { AppRepository } from 'src/domain/repositories/app.repository';
import { App } from 'src/domain/entities/app.entity';

@Injectable()
export class GetAppList_US {
  constructor(private readonly appRepository: AppRepository) {}

  async execute(): Promise<App[]> {
    return this.appRepository.findAll();
  }
}
