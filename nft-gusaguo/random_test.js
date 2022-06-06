// const keccak256 = require('keccak256');
let ids = new Array(20).fill(0);
let generated = [];
let index = 0;

function mint() {
    let _random = Math.floor(Math.random()*100000)+index;
    _pickRandomUniqueId(_random);
    // console.log(_pickRandomUniqueId(_random))
}
function _pickRandomUniqueId(random) {
        let len = ids.length - index++;
        if (len > 0) {
            let randomIndex = random % len;
            // console.log(randomIndex)
            let id = ids[randomIndex] != 0 ? ids[randomIndex] : randomIndex;
            ids[randomIndex] = (ids[len - 1] == 0 ? len - 1 : ids[len - 1]);
            
            ids[len - 1] = 0;
            generated.push(id)
            console.log('index: ',index)
            console.log(id);
            console.log('ids: ',ids)
            console.log(generated)
            return id;
        } else {
            // let genSet = new Set(generated);
            // console.log(genSet)
            // console.log(Array.from(genSet).length)
            // console.log('ids : ', ids)
            throw new Error('len max');
            // console.log("end")
        }
}
// mint();
while (true) {
    mint()
}

//     uint[5] public ids;
//     uint private index;
 
//     constructor() ERC721('RandomIdv1', 'RNDMv1') {}
 
//     function mint(address _to) external {

//             uint256 _random = uint256(keccak256(abi.encodePacked(index, msg.sender, block.timestamp, blockhash(block.number-1))));
//             _safeMint(_to, _pickRandomUniqueId(_random));
        
//     }
 
//     function _pickRandomUniqueId(uint256 random) private returns (uint256 id) {
//         uint len = ids.length - index++;
//         require(len > 0, 'no ids left');
//         uint randomIndex = random % len;
//         id = ids[randomIndex] != 0 ? ids[randomIndex] : randomIndex;
//         ids[randomIndex] = uint(ids[len - 1] == 0 ? len - 1 : ids[len - 1]);
//         ids[len - 1] = 0;
//     }
 
// // }