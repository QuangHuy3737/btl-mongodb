import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post()
  create(@Body() createBillDto: any) {
    return this.billsService.create(createBillDto);
  }

  @Get()
  findAll() {
    return this.billsService.findAll();
  }
  // @Get('/:id')
  //   async findById(@Res() response, @Param('id') id) {
  //       const data = await this.billsService.readById(id);
  //       return response.status(HttpStatus.OK).json({
  //           data
  //       })
  //   }
    @Get('/:username')
    async findByUsername(@Res() response, @Param('username') username) {
        const data = await this.billsService.findByUsername(username);
        return response.status(HttpStatus.OK).json({
            data
        })
    }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billsService.update(+id, updateBillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billsService.remove(+id);
  }
}
