import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dropdown = ({ onChange, onNext }) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const StartTimes = [
    "10:00AM", "10:30AM", "11:30AM", "12:30PM", 
    "1:30PM", "2:30PM", "3:30PM", "4:30PM"
  ];

  const years = ["2024", "2025"];
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [state, setState] = useState({
    selectedDate: today,
    showTimeSlots: false,
    selectedTimeSlot: StartTimes[0], // Default to first start time
  });

  const handleDateChange = (selectedDate) => {
    const isCurrentMonth = selectedDate.getMonth() === selectedMonth;
    setState({
      selectedDate,
      showTimeSlots: isCurrentMonth,
      selectedTimeSlot: StartTimes[0],
    });

    onChange({ 
      date: selectedDate.toDateString(), 
      time: StartTimes[0] 
    });
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      selectedDate: new Date(selectedYear, selectedMonth, 1),
      showTimeSlots: selectedMonth === today.getMonth(),
    }));
  }, [selectedMonth, selectedYear]);

  const goToPreviousMonth = () => {
    setSelectedMonth((prevMonth) => {
      console.log("Current Month:", prevMonth); // Logs the current month before change
      const newMonth = (prevMonth - 1 + 12) % 12;
      console.log("New Month (Previous):", newMonth); // Logs the new month after change
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setSelectedMonth((prevMonth) => {
      console.log("Current Month:", prevMonth); // Logs the current month before change
      const newMonth = (prevMonth + 1) % 12;
      console.log("New Month (Next):", newMonth); // Logs the new month after change
      return newMonth;
    });
  };
  
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleTimeSlotChange = (timeSlot) => {
    setState((prevState) => ({
      ...prevState,
      selectedTimeSlot: timeSlot,
    }));
    onChange({ 
      date: state.selectedDate.toDateString(), 
      time: timeSlot 
    });
  };

  return (
    <div className='scrollable-container'>
      <div className='top-active'>
        <FormControl className='mb-3'>
          <InputLabel>Select Month</InputLabel>
          <Select value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <MenuItem key={index} value={index}>{month}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className='mb-3'>
          <InputLabel>Select Year</InputLabel>
          <Select value={selectedYear} onChange={handleYearChange}>
            {years.map((yr) => (
              <MenuItem key={yr} value={yr}>{yr}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <div>
          <IoIosArrowBack
            onClick={goToPreviousMonth}
            style={{ cursor: 'pointer',margin:"8px", backgroundColor: "#ccc", fontWeight: "bold", fontSize: "24px" }}
          />
          <IoIosArrowForward
            onClick={goToNextMonth}
            style={{ cursor: 'pointer', backgroundColor: "#ccc", fontWeight: "bold", fontSize: "24px" }}
          />
        </div>
      </div>

      <div className='calendar-container'>
        <Calendar
          onChange={handleDateChange}
          value={state.selectedDate}
          showNavigation={false}
          tileDisabled={({ date }) => date < today}
        />
        {state.showTimeSlots && (
          <div className='time-slots'>
            {StartTimes.map((timeSlot) => (
              <div
                key={timeSlot}
                className={`time-slot ${state.selectedTimeSlot === timeSlot ? 'selected' : ''}`}
                onClick={() => handleTimeSlotChange(timeSlot)}
              >
                {timeSlot}
              </div>
            ))}
          </div>
        )}
        <button onClick={onNext} className='nexts'>Next</button>
      </div>
    </div>
  );
};

export default Dropdown;
