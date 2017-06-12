import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

@Injectable()
export class Web3Service{
  private rawWeb3: Web3 // observable
  constructor() {}

  private get web3(): any {
    if (this.rawWeb3 != null) {
      console.log('getting already initialized web3')
      return this.rawWeb3
    }
    else {
      if (typeof window['web3'] !== 'undefined') {
        console.log('init web3 from global')
        this.rawWeb3 = new Web3(window['web3'].currentProvider)
      }
      else {
        console.log('init web3 from hardcoded')
        // set the provider you want from Web3.providers
        this.rawWeb3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
      }
      console.log("web3 initialized")
      return this.rawWeb3
    }
  }

  get currentProvider(): Object {
    return this.web3().currentProvider
  }
}
