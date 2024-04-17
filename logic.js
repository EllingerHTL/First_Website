import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

// Use Calendar and dayGridPlugin here


document.addEventListener("DOMContentLoaded", function() {
    // Logic for calendar functionality
    // You can use libraries like FullCalendar or implement your own calendar logic here
    
        // Initialize FullCalendar
        const calendarEl = document.getElementById('calendar-container');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid'],
            events: [
                // Add your events here, for example:
                {
                    title: 'Event 1',
                    start: '2024-03-01',
                    end: '2024-03-03'
                },
                {
                    title: 'Event 2',
                    start: '2024-03-05',
                    end: '2024-03-07'
                }
                // Add more events as needed
            ]
        });
    
        calendar.render(); // Render the calendar
   
    // Logic for to-do list functionality
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const todoForm = document.getElementById('todo-form');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;
            todoList.appendChild(todoItem);
            todoInput.value = ''; // Clear the input field
        }
    });
});
