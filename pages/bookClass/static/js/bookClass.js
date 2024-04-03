document.querySelectorAll('.grid-item').forEach(button => {
    button.addEventListener('click', function() {
        let classHour = this.getAttribute('data-hour');
        let classCoach = this.getAttribute('data-coach');

        let selectedClass = {
            hour: classHour,
            coach: classCoach
        };

        fetch('/add_class', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedClass),
        })
        .then(response => response.json())
        .then(data => console.log(data));
    });
});