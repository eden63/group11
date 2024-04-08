document.querySelectorAll('.buttons').forEach(button => {
    button.addEventListener('click', function(event) {
        const classItem = {
            date: this.parentElement.querySelector('.date').textContent,
            hour: this.parentElement.querySelector('.time').textContent,
            coach: this.parentElement.querySelector('.coach').textContent
        };
        console.log(classItem);
        console.log('Sending fetch request');

        fetch('/myClasses/remove-class', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(classItem),
        })
        .then(response => {
            console.log('Server response:', response);
            return response.json();
        })
        .then(data => {
            console.log('JSON data"', data);
            const msgElement = document.querySelector(".msg");
            msgElement.textContent = data.msg;
            console.log(data.msg);
            if (data.success) {
                // Remove the class from the page
                this.parentElement.remove();
                alert(data.msg);
                // alert('השיעור הוסר בהצלחה');
            } else {
                alert(data.msg);
                // alert('אירעה שגיאה במהלך ההסרה');
            }
        })
    .catch(error => {
        console.error('Error:', error);
        console.error('Error message:', error.message);
        console.error('Stack trace:', error.stack);
    });
    });
});



