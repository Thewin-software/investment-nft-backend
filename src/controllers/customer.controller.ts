import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './../services/customer.service';

@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getHello(): string {
    return this.customerService.index();
  }


}
