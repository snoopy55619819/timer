const args = process.argv;
const timerTimes = args.slice(2).map(x => parseInt(x));


for (const time of timerTimes) {
  setTimeout(() => {
    if (time > 0) {
      process.stdout.write('\x07');
    }
  }, time * 1000);
}
