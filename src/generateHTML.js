function generateHTML(data) {
    function renderManager () {
        const manCard = `
        <div class="card">
        <div class="card-header bg-primary">
            ${data.name}<br>
            <span class="oi oi-briefcase"></span> Manager
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item border">ID: ${data.id}</li>
                <li class="list-group-item border">Email: tielking5@gmail.com</li>
                <li class="list-group-item border">Office number: 1</li>
            </ul>
        </div>
        `
        return manCard
    }
}