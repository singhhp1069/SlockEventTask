export default interface RootObject {
    address: string;
    blockHash: string;
    blockNumber: number;
    logIndex: number;
    removed: boolean;
    transactionHash: string;
    transactionIndex: number;
    id: string;
    returnValues: ReturnValues;
    event: string;
    signature: string;
    raw: Raw;
}
export interface Raw {
    data: string;
    topics: string[];
}
export interface ReturnValues {
    0: string;
    1: string;
    2: 22;
    3: number;
    hash: string;
    owner: string;
    value: Value;
    status: number;
}
export interface Value {
    _hex: string;
}

        
    
        
    
        
   