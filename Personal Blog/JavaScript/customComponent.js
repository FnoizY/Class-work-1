    // Name: Fares Bahamdan 
    // ID: 201943050
    
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <footer>
      <a href="https://github.com/FnoizY"><img src="Assets/Github-logo.svg" alt=""></a>
      <a href="Advanced Table.html"><img src="Assets/table-icon.png" alt=""></a>
      <a href="Hire me.html"><img src="Assets/job-send-icon.png" alt=""></a>
    </footer>    
    `;
  }
}

customElements.define('main-footer', Footer);