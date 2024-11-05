document.getElementById('assignmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get values
  const assignmentName = document.getElementById('assignment').value;
  const deadline = document.getElementById('deadline').value;

  // Create a new assignment element
  const assignmentItem = document.createElement('div');
  assignmentItem.classList.add('assignment-item');

  // Assignment details
  assignmentItem.innerHTML = `
    <p>Assignment: ${assignmentName}</p>
    <p>Deadline: ${deadline}</p>
    <label>
      Completed: <input type="checkbox">
    </label>
  `;

  // Append assignment to the list
  document.getElementById('assignmentsList').appendChild(assignmentItem);

  // Clear form inputs
  document.getElementById('assignment').value = '';
  document.getElementById('deadline').value = '';
});


