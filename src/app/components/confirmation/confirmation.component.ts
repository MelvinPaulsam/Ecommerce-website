import { Customer } from '../../models/Customer';
import { ConfirmationService } from '../../services/confirmation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  customer: Customer = new Customer;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.confirmationService.getCustomer().subscribe(res => {
      this.customer = res;
      console.log(res);
    })
  }

}
