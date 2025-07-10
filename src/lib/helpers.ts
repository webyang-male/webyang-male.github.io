export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInItaly(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Italy's time
  const offsetItaly = 2; // Italy is in Central European Summer Time (UTC+2), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetItaly);

  return now;
}

export function formatTimeForItaly(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Asia/Shanghai",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. You can automate this with libraries like `moment-timezone`.
  // For simplicity, here I'm just appending "CET", but do remember that Italy switches between CET and CEST.
  formattedTime += " CST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * 返回当前日期的年、月、日和星期几信息
 * @returns 包含年、月、日和星期几的对象
 */
export function getCurrentDateInfo(): { year: number; month: number; day: number; weekday: number } {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 转换为 1 - 12 的月份
  const day = now.getDate();
  const weekday = now.getDay(); // 0 代表星期日，1 - 6 代表星期一到星期六

  return { year, month, day, weekday };
}