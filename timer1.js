const args = process.argv.slice(2);

const beeper = args => {
  if (args.length === 0){
    process.exit();
  }

  for (let beeps of args) {  
    if (beeps >= 0 || beeps === Number()) {
      setTimeout( () => {
        process.stdout.write('\x07');
        console.log('beep')
      }, beeps*1000);
    }
  }
}
beeper(args);