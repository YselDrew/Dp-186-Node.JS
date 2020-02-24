function countdown(miliseconds) {
  const time = convertMiliseconds(miliseconds);
  const timeString = formatTimeToString(time);
  return timeString;
}

function convertMiliseconds(miliseconds) {
  const sign = miliseconds >= 0 ? '+' : '-';

  const noSignMiliseconds = Math.abs(miliseconds);
  const secs = noSignMiliseconds / 1000;

  const hours = Math.floor(secs / (60 * 60));

  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  const time = {
    sign,
    hours,
    minutes,
    seconds,
  };

  return time;
}


function formatTimeToString(time) {
  const h = time.hours.toString().padStart(2, '0');
  const m = time.minutes.toString().padStart(2, '0');
  const s = time.seconds.toString().padStart(2, '0');
  const sign = time.sign;

  return `${sign}${h}:${m}:${s}`
}

countdown(-154800000) // '-43:00:00'
countdown(0) // '+00:00:00'
countdown(61000) // '+00:01:01'
countdown(360000000) // '+100:00:00'

