const pushTask = async (entry) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/654ILmSsTWImQipsiZEo/scores',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });
};

exports.pushTask = pushTask;
