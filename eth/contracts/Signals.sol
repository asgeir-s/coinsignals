pragma solidity ^0.4.10;

import "./StringUtils.sol";

contract Signals{
	mapping (address => Position[]) signals;
    mapping (address => uint) balance;
    mapping (address => string) names;

	// buy close buy close 
 	struct Position {
        string coin;
        uint amont;
		uint timestamp;
		bool closed;
    }

	function Signals() {
	}

    function createStream(string name) returns (bool) {
        require(bytes(name).length >= 3);
		require(bytes(names[msg.sender]).length == 0);
        names[msg.sender] = name;
        balance[msg.sender] = 100;
    }

	function openPosition(string coinString, uint amont) returns (bool) {
	    require(bytes(names[msg.sender]).length >= 3);
		require(balance[msg.sender] >= amont);
	    require(
	        StringUtils.equal(coinString, "Bitcoin") ||
	        StringUtils.equal(coinString, "Ethereum") ||
	        StringUtils.equal(coinString, "Zcash") ||
	        StringUtils.equal(coinString, "Dash")
	    );
    
        balance[msg.sender] -= amont;

		signals[msg.sender].push(Position({
			coin: coinString,
			amont: amont,
			timestamp: block.timestamp,
			closed: false
		}));
		return true;
	}
	
	function closePosition(uint signalIndex) returns (bool) {
	    require(signals[msg.sender].length >= signalIndex);
	    require(signals[msg.sender][signalIndex].closed == false);
	   
	    signals[msg.sender][signalIndex].closed = true;
	    balance[msg.sender] += signals[msg.sender][signalIndex].amont;
	}
	
	function getNumberOfSignals(address addr) returns (uint) {
	    return signals[addr].length;
	}
	
	function getSignal(address addr, uint index) returns(string, uint, uint, bool) {
		return (signals[addr][index].coin, signals[addr][index].amont, signals[addr][index].timestamp, signals[addr][index].closed);
	}

	function getName(address addr) returns (string) {
		return names[addr];
	}
}