const countHours = (year: number, holidays: string[]) =>
  holidays.filter((holiday) => {
    const day = new Date(`${holiday}/${year}`).getDay();

    return day !== 0 && day !== 6;
  }).length * 2;

const year = 2023;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

console.log(countHours(year, holidays));
