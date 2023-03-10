class MyUserTable extends HTMLElement {

    static get observedAttributes() {
        return ['data-users-updated'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }

    disconnectedCallback () {
		console.log('Custom component removed from DOM', this);
	}

    render() {
        const tableHeader = this.getAttribute('data-header');
        let usersHTML = '';
        if (this.userData) {
            for (let user of this.userData) {
                usersHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                    </tr>
                `;
            }
        }

        this.shadowRoot.innerHTML = `
            <style>
                #container {
                    border: 1px solid var(--border-color);
                    padding: 10px;
                }
            </style>
            <div id="container">
                <h1>${tableHeader}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Förnamn</th>
                            <th>Efternamn</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${usersHTML}
                    </tbody>
                </table>
            </div>
        `;

        let event = new CustomEvent('my-user-table-loaded', {
            bubbles: true,
            cancelable: true,
            detail: 'My user table has loaded and the data will probably have rendered by now!'
        });

        document.dispatchEvent(event);
    }
}

const elemName = 'my-user-table';
customElements.define(elemName, MyUserTable);

export { elemName };