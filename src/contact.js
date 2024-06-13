function contactPage() {
  const contact = document.getElementById('contact')
  const body = document.getElementById('body');
  const mainContactBox = document.createElement('div');
  mainContactBox.classList.add('mainContactBox');

  contact.onclick = function() {
  body.append(mainContactBox);
  console.log('working')
  }
}

export default contactPage;