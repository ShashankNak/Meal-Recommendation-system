document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { name: 'salim', age: 30, email: 'salim@gm.com', gender: 'Male' },
        { name: 'asif', age: 25, email: 'asif@gm.com', gender: 'Male' },
    ];

    const userTableBody = document.getElementById('userTableBody');

    function renderTable() {
        userTableBody.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td><span class="name">${user.name}</span></td>
                <td><span class="age">${user.age}</span></td>
                <td><span class="email">${user.email}</span></td>
                <td><span class="gender">${user.gender}</span></td>
                <td>
                    <button class="update" onclick="editUser(${index})">Update</button>
                    <button class="delete" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;

            userTableBody.appendChild(row);
        });
    }

    window.editUser = function(index) {
        const user = users[index];
        const newName = prompt('Enter new name:', user.name);
        const newAge = prompt('Enter new age:', user.age);
        const newEmail = prompt('Enter new email:', user.email);
        const newGender = prompt('Enter new gender:', user.gender);
        if (newName && newAge && newEmail && newGender) {
            user.name = newName;
            user.age = newAge;
            user.email = newEmail;
            user.gender = newGender;
            renderTable();
        }
    };

    window.deleteUser = function(index) {
        users.splice(index, 1);
        renderTable();
    };

    renderTable();
});
