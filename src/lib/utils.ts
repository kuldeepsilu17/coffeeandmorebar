import { BUSINESS_INFO } from '@/data/business';

export function getOpenStatus(): {
  isOpen: boolean;
  statusText: string;
  nextChange: string;
} {
  try {
    // Current day & time in Pristina (UTC+1 / UTC+2 DST)
    const now = new Date();
    // Default fallback to local time
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = dayNames[now.getDay()];
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const todaySchedule = BUSINESS_INFO.hours.find(h => h.day === currentDayName);

    if (!todaySchedule) {
      return { isOpen: true, statusText: "Open Today", nextChange: "Closes 11:00 PM" };
    }

    const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
    const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);

    const openTimeInMinutes = openHour * 60 + openMin;
    const closeTimeInMinutes = closeHour * 60 + closeMin;

    if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
      return {
        isOpen: true,
        statusText: "Open Now",
        nextChange: `Until 11:00 PM today`,
      };
    } else if (currentTimeInMinutes < openTimeInMinutes) {
      return {
        isOpen: false,
        statusText: "Closed Now",
        nextChange: `Opens today at ${todaySchedule.open === '07:00' ? '7:00 AM' : '8:00 AM'}`,
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed for the night",
        nextChange: `Opens tomorrow at 7:00 AM`,
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "Open Daily",
      nextChange: "7:00 AM – 11:00 PM",
    };
  }
}
