import { convertDateToString } from "../utils/dateUtil";

let alert = {
  alertId: "",
  alertName: "Error",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et imperdiet ex, vitae mollis turpis. Sed feugiat finibus rutrum. Vestibulum eu bibendum tellus. Vestibulum ut quam lorem. Praesent sit amet tristique mauris, et euismod dui. Aenean vehicula tellus non arcu luctus, ut lacinia metus rhoncus. Duis dictum nisl vel nisl efficitur, id vulputate ex varius. Etiam in magna consequat, varius enim sit amet, dignissim mi. Nullam porta, ligula sed tempus auctor, nisi velit interdum est, nec malesuada enim erat vel ligula. Etiam nulla metus, interdum elementum elementum eu, vestibulum quis tellus. Sed eleifend finibus feugiat. Duis tincidunt felis non neque.",
  severity:2,
  priority: 4,
  source: "computer.local",
  conclusion: {
    text:
      "Curabitur non nulla non neque ornare lobortis a eu ipsum. In eu sapien dignissim, porttitor enim non, consequat purus. Nullam enim dolor, rutrum quis venenatis vel, scelerisque at eros. Aenean."
  },
  solution: {
    text:
      "Pellentesque elementum viverra orci, interdum finibus dui iaculis quis. Donec congue ante eu volutpat blandit. Fusce lectus orci, malesuada ac diam nec, volutpat placerat arcu. Fusce gravida vestibulum lectus nec."
  },
  explanation: {
      text:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla cursus nisl sed massa hendrerit aliquet. Vestibulum porta ante id euismod consequat. Etiam eget tincidunt odio, eget."
  },
  timeGenerated: convertDateToString(new Date())
};

export const getAlerts = () => {
  let alerts = [];
  for (let index = 0; index < 11; index++) {
    let a = { ...alert };
    a.alertId = index.toString();
    a.alertName += ` ${index}`
    alerts.push(a);
  }

  return alerts;
};
