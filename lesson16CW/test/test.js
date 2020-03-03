import { testSum } from "./test_sum.js"
import { testMulti} from "./test_multi.js"

mocha.setup("bdd")

const ass = chai.assert

//TESTS
testSum(ass);

testMulti(ass);

mocha.run()
