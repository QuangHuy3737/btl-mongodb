import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bill, BillDocument } from 'src/schemas/bill.schema';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillsService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async create(product: Bill):Promise<any>  {
        return new this.billModel(product).save();
  }
  

  findAll() {
    return this.billModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} bill`;
  }
  async readById(id): Promise<Bill> {
    return await this.billModel.findById(id).exec();
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  remove(id: number) {
    return `This action removes a #${id} bill`;
  }
}
