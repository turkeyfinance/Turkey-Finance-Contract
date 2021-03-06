// truffle migrate --reset --network bsctest


// npx truffle-flattener ./contracts/MasterChefV2.sol >./Flat/FlatMasterChefV2.sol 
// npx truffle-flattener ./contracts/EggToken.sol >./Flat/FlatEggToken.sol 

// Before transferOwnership , make sure 


// const CakeToken = artifacts.require("CakeToken");
// const BnbStaking = artifacts.require("BnbStaking");
// const LPToken = artifacts.require("LPToken");
// const SyrupBar = artifacts.require("SyrupBar");
// const Masterchef = artifacts.require("MasterChef")

const Egg = artifacts.require("EggToken");
const MasterChefV2 = artifacts.require("MasterChefV2");
// const LPToken = artifacts.require("LPToken");


// module.exports = async function(deployer) {

// };




module.exports = async function (deployer) {

  // Change this before migrate
  const _owner = '0x4b41c092Ae76b425C00d6A1a90752b02d74F3322';

  await deployer.deploy(Egg);
  const egg = await Egg.deployed();



  //       EggToken _egg,
  //       address _devaddr,
  //       address _feeAddress, ( owner)
  //       uint256 _eggPerBlock, with ''
  //       uint256 _startBlock

  await deployer.deploy(MasterChefV2,egg.address,_owner,_owner,'1000000000000000000',5583082);
  const masterChefV2 = await MasterChefV2.deployed();

  // await deployer.deploy(LPToken);
  // const lpToknen = await LPToken.deployed();

  await egg.mint(masterChefV2.address,'1000000000000000000000000');
  await egg.mint(_owner,'100000000000000000000')
  // await lpToknen.mint(_owner,'100000000000000000000')



  








  // await deployer.deploy(CakeToken);
  // const cakeToken = await CakeToken.deployed();
  
  // await deployer.deploy(LPToken);
  // const lpToken = await LPToken.deployed();

  // await deployer.deploy(SyrupBar, cakeToken.address);
  // const syrupBar = await SyrupBar.deployed();

  // await deployer.deploy(Masterchef, cakeToken.address, syrupBar.address, _owner, '1000000000000000000', 6982476);
  // const masterChef = await Masterchef.deployed();



  // await cakeToken.mint(_owner, "10000000000000000000")
  // await lpToken.mint(_owner, "10000000000000000000")
  // await syrupBar.mint(_owner, "10000000000000000000")










};



// Masterchef constructor


//         CakeToken _cake,
//         SyrupBar _syrup,
//         address _devaddr,
//         uint256 _cakePerBlock,
//         uint256 _startBlock



// BnbStaking

  // await deployer.deploy(BnbStaking, lpToken.address, cakeToken.address, 1, 6936866, 7936866, '0xe8dda644fd1fdcdf36b1aa70f3c588cd330b353b', '0xae13d989dac2f0debff460ac112a837c89baa7cd');
  // const bnbStaking = await BnbStaking.deployed();


//         IBEP20 _lp,
//         IBEP20 _rewardToken,
//         uint256 _rewardPerBlock,
//         uint256 _startBlock,
//         uint256 _bonusEndBlock,
//         address _adminAddress,
//         address _wbnb
