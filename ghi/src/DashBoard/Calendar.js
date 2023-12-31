import { useState } from 'react';

const Calendar = () => {
  const [date] = useState(new Date());

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="bg-white p-1 dashboard-font-normal dashboard-border flex-shrink">
      <div className="text-center text-2xl font-bold mb-4">
        {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border p-1">Sun</th>
            <th className="border p-1">Mon</th>
            <th className="border p-1">Tue</th>
            <th className="border p-1">Wed</th>
            <th className="border p-1">Thu</th>
            <th className="border p-1">Fri</th>
            <th className="border p-1">Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {[...Array(firstDayOfMonth)].map((_, i) => (
              <td key={i} className="border p-1"></td>
            ))}
            {days.slice(0, 7 - firstDayOfMonth).map(day => (
              <td key={day} className={`border p-1 ${day === date.getDate() ? 'bg-violet-300' : ''}`}>
                {day}
              </td>
            ))}
          </tr>
          {[...Array(Math.ceil((daysInMonth - (7 - firstDayOfMonth)) / 7))].map((_, i) => (
            <tr key={i}>
              {days.slice(i * 7 + (7 - firstDayOfMonth), (i + 1) * 7 + (7 - firstDayOfMonth)).map(day => (
                <td key={day} className={`border p-1 ${day === date.getDate() ? 'bg-blue-200 rounded-xl' : ''}`}>
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
