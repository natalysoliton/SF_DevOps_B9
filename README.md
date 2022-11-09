# SF_DevOps_B9
NPM, Composer
install
npm i query-serialize --save
yarn add query-serialize

usage

const serialize = reguire("query-serialize");
//or
import serialize from "query-serialize";
app.use(serialize);
//or
app.get('/', serialize, (req, res, next)=>{//console.log(req.conditions)})
