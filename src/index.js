import Promise from 'bluebird';

async function greeting() {
  console.log('Hello...');
  await Promise.delay(1000);
  console.log('...World!');
}

greeting()
  .then(() => {
    console.log('Done');
  })
  .catch(err => {
    console.error(err.stack);
  });
