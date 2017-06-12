import { Injectable } from '@angular/core'
import { default as contract } from 'truffle-contract'

import { SignalsArtifacts } from './positions.abi'
import { Web3Service } from "../web3.service"
import { Position } from "../../types/Position.d";

@Injectable()
export class PositionsContractService {

    private signalsContract: any

    constructor(private web3Service: Web3Service) {
        this.signalsContract = contract(SignalsArtifacts)
        this.signalsContract.setProvider(web3Service.currentProvider)
     }

    async getName(address: string): Promise<string> {
        const deployedContract = await this.signalsContract.deployed()
        return await deployedContract.getName.call(address, { from: address })
    }

    async createStream(address: string, name: string): Promise<any> {
        const deployedContract = await this.signalsContract.deployed()
        console.log(`create stream with address: ${address} and name: ${name}`)
        return await deployedContract.createStream(name, { from: address })
    }

    async openPosition(address: string, coin: string, amount: number): Promise<any> {
        const deployedContract = await this.signalsContract.deployed()
        console.log('publish new signal')
        return await deployedContract.openPosition(coin, amount, { from: address })
    }

    async getNumberOfPositions(address: string): Promise<number> {
        const deployedContract = await this.signalsContract.deployed()
        return await deployedContract.getNumberOfPositions.call(address, { from: address })
    }

    async getPosition(address: string, index: number): Promise<Position> {
        const deployedContract = await this.signalsContract.deployed()
        const rawSignal: any[] = await deployedContract.getPosition.call(address, index, { from: address })
        return {
            coin: rawSignal[0],
            amount: rawSignal[1],
            timestamp: rawSignal[2],
            closed: rawSignal[3]
        }
    }

    async closePosition(address: string, index: number) {
        const deployedContract = await this.signalsContract.deployed()
    }

    async getAllSignals(address: string): Promise<Position[]> {
        const numberOfSignals = await this.getNumberOfPositions(address)
        console.log('number of signals: ' + numberOfSignals)
        const signals = []

        for (let i = 0; i < numberOfSignals; i++) {
            console.log('iter')
            signals.push(this.getPosition(address, i))
        }

        return await Promise.all(signals)
    }

}
