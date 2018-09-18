module.exports = pwd



function pwd (cmd){
if (cmd === 'pwd'){
  console.log(`\n${process.cwd()}`)
  
  }
}