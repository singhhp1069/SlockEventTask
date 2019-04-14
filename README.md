# Slock Programming Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

The programming task shared by **Yvonne Jaursch**

### Details
As mentioned in the task to install the parity network, unfortunatly I tried but my system configuration is quite poor so it didn't worked on my macbook.
and as an alternate way in used infura.io

*JSON-RPC endpoints*
```sh
https://mainnet.infura.io/v3/d8f39143f5b34f77964e944de142dbfb
```
*websocket*
```sh
wss://mainnet.infura.io/ws/v3/d8f39143f5b34f77964e944de142dbfb
```
*Address*
```sh
0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef
```
*ABI*
```sh
https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef#code
```
*Event*
relavent event is **BidRevealed** in unsealBid function in contract

*blockCount*
ethereum block count per day on average is around 6000 blocks as per **https://etherscan.io/chart/blocks** so for past 2 days events I have used 12000 blocks, which is substracted from the currentBlockCount.

### Envoirnment Variables
you can change the ENV variables under */src/environments/environments.prod.ts*

### Installation and Running

Make sure the Docker is installed and running.

## Without Docker
```sh
npm i -g angular/cli@latest
npm install
ng serve
```
access it on **localhost:4200**

## With Docker
**to build the image**
```sh
docker build -t ngeventapp .
```

**to run the image**
```sh
docker run -p 80:80 ngeventapp
```

configure the expose PORT NUMBER accordingly.

### Todos
 - Let me know if you want me to do any changes
 

**Har Preet Singh**
**singhhp1069@gmail.com**
**https://www.linkedin.com/in/singhhp1069/**