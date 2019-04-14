import { Component, OnInit , Inject } from '@angular/core';
import { WEB3 } from './web3';
import Web3 from 'web3';
import RootObject from './objInterface';
import { environment } from './../environments/environment.prod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  provider: string; 
  contractAddress: string;
  contractABI: any;
  contract: any;
  error : string;
  events : RootObject;
  loading: Boolean;

  constructor(@Inject(WEB3) private web3: Web3){
    this.title = 'slock.it ENSEvents';
    this.provider = environment.provider;
    this.contractAddress = environment.address;
    this.loading = true;
    this.contractABI = environment.abi;
    this.web3 = new Web3(this.provider);
    this.contract = new this.web3.eth.Contract(this.contractABI, this.contractAddress);
  }

  ngOnInit() {
    this.getEvents();
  }

 async getCurrentBlockNumber() {
    return await this.web3.eth.getBlockNumber();
  }

  getEvents(): void {
   const eventType = environment.event;
   const approxBlockCount = environment.blockCount;
    this.getCurrentBlockNumber().then((res) => {
        return res;
    }).then((value) => {
      this.contract.getPastEvents(eventType,
        { fromBlock: value-approxBlockCount,
          toBlock: "latest"
        },(error, events) =>{
          this.loading = false;
          if(error){
            this.error = error;
            return;
          }
          this.events = <RootObject>events;
        });
    }).catch((err) => {
      this.error = err;
    });
  }
}
